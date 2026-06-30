const version = 5;
const size = version * 4 + 17;
const dataCodewords = 108;
const eccCodewords = 26;

export function generateQrModules(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  if (bytes.length > 106) {
    throw new Error("QR text is too long for the built-in generator.");
  }

  const bits = [];
  appendBits(bits, 0b0100, 4);
  appendBits(bits, bytes.length, 8);
  for (const byte of bytes) appendBits(bits, byte, 8);
  appendBits(bits, 0, Math.min(4, dataCodewords * 8 - bits.length));
  while (bits.length % 8) bits.push(0);

  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) {
    codewords.push(bits.slice(i, i + 8).reduce((value, bit) => (value << 1) | bit, 0));
  }
  for (let pad = 0xec; codewords.length < dataCodewords; pad ^= 0xec ^ 0x11) {
    codewords.push(pad);
  }

  const allCodewords = codewords.concat(reedSolomonRemainder(codewords, eccCodewords));
  return buildMatrix(codewordsToBits(allCodewords));
}

function appendBits(bits, value, length) {
  for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
}

function codewordsToBits(codewords) {
  const bits = [];
  for (const codeword of codewords) appendBits(bits, codeword, 8);
  return bits;
}

function buildMatrix(dataBits) {
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));

  drawFinder(modules, reserved, 3, 3);
  drawFinder(modules, reserved, size - 4, 3);
  drawFinder(modules, reserved, 3, size - 4);
  drawAlignment(modules, reserved, 30, 30);
  drawTiming(modules, reserved);
  reserveFormatAreas(reserved);
  setFunction(modules, reserved, 8, version * 4 + 9, true);

  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let vert = 0; vert < size; vert += 1) {
      const y = upward ? size - 1 - vert : vert;
      for (let x = right; x >= right - 1; x -= 1) {
        if (reserved[y][x]) continue;
        const rawBit = bitIndex < dataBits.length ? dataBits[bitIndex] === 1 : false;
        modules[y][x] = rawBit !== ((x + y) % 2 === 0);
        bitIndex += 1;
      }
    }
    upward = !upward;
  }

  drawFormatBits(modules, reserved);
  return modules;
}

function setFunction(modules, reserved, x, y, value) {
  if (x < 0 || y < 0 || x >= size || y >= size) return;
  modules[y][x] = value;
  reserved[y][x] = true;
}

function drawFinder(modules, reserved, centerX, centerY) {
  for (let y = centerY - 4; y <= centerY + 4; y += 1) {
    for (let x = centerX - 4; x <= centerX + 4; x += 1) {
      const dist = Math.max(Math.abs(x - centerX), Math.abs(y - centerY));
      setFunction(modules, reserved, x, y, dist !== 2 && dist !== 4);
    }
  }
}

function drawAlignment(modules, reserved, centerX, centerY) {
  for (let y = centerY - 2; y <= centerY + 2; y += 1) {
    for (let x = centerX - 2; x <= centerX + 2; x += 1) {
      const dist = Math.max(Math.abs(x - centerX), Math.abs(y - centerY));
      setFunction(modules, reserved, x, y, dist !== 1);
    }
  }
}

function drawTiming(modules, reserved) {
  for (let i = 8; i < size - 8; i += 1) {
    setFunction(modules, reserved, i, 6, i % 2 === 0);
    setFunction(modules, reserved, 6, i, i % 2 === 0);
  }
}

function reserveFormatAreas(reserved) {
  for (let i = 0; i < 9; i += 1) {
    reserved[8][i] = true;
    reserved[i][8] = true;
  }
  for (let i = 0; i < 8; i += 1) {
    reserved[8][size - 1 - i] = true;
    reserved[size - 1 - i][8] = true;
  }
}

function drawFormatBits(modules) {
  const bits = getFormatBits(0b01, 0);
  for (let i = 0; i <= 5; i += 1) modules[8][i] = getBit(bits, i);
  modules[8][7] = getBit(bits, 6);
  modules[8][8] = getBit(bits, 7);
  modules[7][8] = getBit(bits, 8);
  for (let i = 9; i < 15; i += 1) modules[14 - i][8] = getBit(bits, i);

  for (let i = 0; i < 8; i += 1) modules[size - 1 - i][8] = getBit(bits, i);
  for (let i = 8; i < 15; i += 1) modules[8][size - 15 + i] = getBit(bits, i);
  modules[size - 8][8] = true;
}

function getFormatBits(errorCorrectionBits, mask) {
  let data = (errorCorrectionBits << 3) | mask;
  let bits = data << 10;
  for (let i = 14; i >= 10; i -= 1) {
    if (((bits >>> i) & 1) !== 0) bits ^= 0x537 << (i - 10);
  }
  return ((data << 10) | bits) ^ 0x5412;
}

function getBit(value, index) {
  return ((value >>> index) & 1) !== 0;
}

function reedSolomonRemainder(data, degree) {
  const generator = reedSolomonGenerator(degree);
  const result = Array(degree).fill(0);
  for (const byte of data) {
    const factor = byte ^ result.shift();
    result.push(0);
    for (let i = 0; i < degree; i += 1) result[i] ^= multiply(generator[i], factor);
  }
  return result;
}

function reedSolomonGenerator(degree) {
  const result = Array(degree - 1).fill(0).concat(1);
  let root = 1;
  for (let i = 0; i < degree; i += 1) {
    for (let j = 0; j < result.length; j += 1) {
      result[j] = multiply(result[j], root);
      if (j + 1 < result.length) result[j] ^= result[j + 1];
    }
    root = multiply(root, 0x02);
  }
  return result;
}

function multiply(x, y) {
  let result = 0;
  for (let i = 7; i >= 0; i -= 1) {
    result = (result << 1) ^ ((result >>> 7) * 0x11d);
    result ^= ((y >>> i) & 1) * x;
  }
  return result & 0xff;
}
