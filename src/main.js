import { questions } from "./config/questions.js";
import { results } from "./config/results.js";
import { resultMap } from "./config/resultMap.js";
import { generateQrModules } from "./utils/qr.js";
import { getFinalResult } from "./utils/scoring.js";
import { clearStorage, loadAnswers, loadResult, saveAnswers, saveResult } from "./utils/storage.js";

const app = document.querySelector("#app");
const state = {
  page: loadResult() ? "result" : "start",
  currentIndex: Math.min(loadAnswers().length, questions.length - 1),
  answers: loadAnswers(),
  finalResult: loadResult()
};

const dimensionLabels = {
  school: "爱校",
  food: "爱吃",
  social: "社交",
  study: "爱学"
};

const tagResultMap = {
  leader: "LEADER",
  eater: "EATER",
  hedgehog: "HEDGEHOG",
  rucat: "RUCAT",
  model: "MODEL",
  mom: "MOM",
  defender: "DEFENDER",
  dove: "DOVE",
  just_rucer: "JUST_RUCER_1",
  speaker: "SPEAKER",
  kfcer: "KFCER",
  fduer: "FDUER",
  rednoter: "REDNOTER",
  god: "GOD",
  mouse: "MOUSE",
  tongxian: "TONGXIAN"
};

const resultTagAliases = {
  LEADER: ["leader"],
  EATER: ["eater"],
  HEDGEHOG: ["hedgehog"],
  RUCAT: ["rucat"],
  MODEL: ["model"],
  MOM: ["mom"],
  DEFENDER: ["defender"],
  DOVE: ["dove"],
  JUST_RUCER_1: ["just_rucer"],
  SPEAKER: ["speaker"],
  KFCER: ["kfcer"],
  JUST_RUCER_2: ["just_rucer"],
  FDUER: ["fduer"],
  REDNOTER: ["rednoter"],
  GOD: ["god"],
  MOUSE: ["mouse"],
  TONGXIAN: ["tongxian"]
};

function setPage(page) {
  state.page = page;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateAnswer(questionId, optionId) {
  const next = state.answers.filter((answer) => answer.questionId !== questionId);
  next.push({ questionId, optionId });
  state.answers = next;
  saveAnswers(state.answers);

  if (state.currentIndex >= questions.length - 1) {
    state.finalResult = getFinalResult(state.answers, questions, resultMap, results);
    saveResult(state.finalResult);
    setPage("result");
    return;
  }

  state.currentIndex += 1;
  setPage("quiz");
}

function goBack() {
  if (state.currentIndex === 0) {
    setPage("start");
    return;
  }
  state.currentIndex -= 1;
  setPage("quiz");
}

function restart() {
  clearStorage();
  state.page = "start";
  state.currentIndex = 0;
  state.answers = [];
  state.finalResult = null;
  render();
}

function getShareUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = Array.from(text);
  let line = "";
  let lines = 0;
  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines += 1;
      line = char;
      if (lines >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawContainedImage(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function fitText(ctx, text, maxSize, minSize, weight, maxWidth) {
  for (let size = maxSize; size >= minSize; size -= 2) {
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif`;
    if (ctx.measureText(text).width <= maxWidth) return;
  }
}

function drawQr(ctx, modules, x, y, sizePx) {
  const count = modules.length;
  const quiet = 4;
  const cell = sizePx / (count + quiet * 2);
  ctx.fillStyle = "#fffdf8";
  roundRect(ctx, x, y, sizePx, sizePx, 22);
  ctx.fill();
  ctx.fillStyle = "#2b2b2b";
  for (let row = 0; row < count; row += 1) {
    for (let col = 0; col < count; col += 1) {
      if (!modules[row][col]) continue;
      ctx.fillRect(x + (col + quiet) * cell, y + (row + quiet) * cell, Math.ceil(cell), Math.ceil(cell));
    }
  }
}

function getSecondaryResult(finalResult) {
  const blockedTags = new Set(resultTagAliases[finalResult.result.id] || []);
  const candidates = Object.entries(finalResult.tags || {})
    .filter(([tag, score]) => score > 0 && !blockedTags.has(tag) && tagResultMap[tag])
    .sort((a, b) => b[1] - a[1]);
  const resultId = tagResultMap[candidates[0]?.[0]];
  return resultId ? results[resultId] : null;
}

async function createSharePoster(finalResult) {
  const result = finalResult.result;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");
  const image = await loadImage(result.imagePlaceholder);
  const qrModules = generateQrModules(getShareUrl());

  ctx.fillStyle = "#f8f1e7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(158, 27, 50, 0.10)";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(410, 0);
  ctx.lineTo(0, 520);
  ctx.fill();
  ctx.fillStyle = "rgba(215, 170, 72, 0.18)";
  ctx.beginPath();
  ctx.moveTo(1080, 1920);
  ctx.lineTo(620, 1920);
  ctx.lineTo(1080, 1350);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = "#767676";
  ctx.font = "700 30px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("我的 RUC 毕业人格是", 540, 112);

  ctx.fillStyle = "#7a1426";
  fitText(ctx, result.name, 104, 76, 900, 780);
  ctx.fillText(result.name, 540, 226);
  ctx.fillStyle = "#9e1b32";
  fitText(ctx, result.english, 102, 72, 900, 850);
  ctx.fillText(result.english, 540, 328);

  ctx.fillStyle = "#fffaf2";
  roundRect(ctx, 98, 392, 884, 884, 30);
  ctx.fill();
  ctx.strokeStyle = "#e8dccb";
  ctx.lineWidth = 4;
  ctx.stroke();
  drawContainedImage(ctx, image, 140, 434, 800, 800);

  ctx.textAlign = "left";
  ctx.fillStyle = "#fffdf8";
  roundRect(ctx, 108, 1326, 864, 220, 24);
  ctx.fill();
  ctx.strokeStyle = "#e8dccb";
  ctx.stroke();
  ctx.fillStyle = "#7a1426";
  ctx.font = "900 34px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("人格报告", 156, 1390);
  ctx.fillStyle = "#514840";
  ctx.font = "500 30px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapText(ctx, result.description, 156, 1448, 768, 44, 2);

  drawQr(ctx, qrModules, 738, 1610, 212);
  ctx.fillStyle = "#767676";
  ctx.font = "700 28px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText(getShareUrl(), 108, 1732);

  return canvas.toDataURL("image/png");
}

async function openSharePoster() {
  const finalResult = state.finalResult || getFinalResult(state.answers, questions, resultMap, results);
  const toast = app.querySelector(".toast");
  toast.textContent = "正在生成分享图...";
  toast.setAttribute("aria-hidden", "false");

  try {
    const imageUrl = await createSharePoster(finalResult);
    document.body.insertAdjacentHTML("beforeend", `
      <div class="share-modal" role="dialog" aria-modal="true" aria-label="分享图预览">
        <div class="share-panel">
          <button class="share-close" data-action="close-share" aria-label="关闭分享图">×</button>
          <h2>分享图已生成</h2>
          <p>长按图片保存，二维码会打开这个测试网页。</p>
          <img class="share-preview" src="${imageUrl}" alt="RUCTI 测试结果分享图" />
          <a class="download-link" href="${imageUrl}" download="ructi-result.png">保存图片</a>
        </div>
      </div>
    `);
    toast.textContent = "分享图已生成，可以长按保存。";
  } catch {
    toast.textContent = "二维码生成失败，网页地址可能太长了。";
  }
}

function renderStart() {
  return `
    <section class="screen start-screen">
      <div class="brand-pill">RUCTI 2026</div>
      <h1>RUCTI 毕业人格测试</h1>
      <p class="subtitle">测测你是哪一种人大毕业生</p>
      <div class="hero-image-box">
        <img src="./public/assets/ructipng/RUCER.png" alt="RUCTI low-poly decorative illustration" />
      </div>
      <div class="intro-grid">
        <span>1分钟测出你的 RUC 人格</span>
        <span>纯属娱乐，切莫当真</span>
      </div>
      <button class="primary-button" data-action="start">开始测试</button>
      <p class="footnote">毕业之前，再测一次。</p>
    </section>
  `;
}

function renderQuiz() {
  const question = questions[state.currentIndex];
  const selected = state.answers.find((answer) => answer.questionId === question.id)?.optionId;
  const progress = ((state.currentIndex + 1) / questions.length) * 100;

  return `
    <section class="screen quiz-screen">
      <header class="quiz-header">
        <button class="icon-button" data-action="back" aria-label="返回上一题">‹</button>
        <div class="counter">${state.currentIndex + 1} / ${questions.length}</div>
      </header>
      <div class="progress-track" aria-label="答题进度">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <article class="question-card">
        <h2>${question.title}</h2>
        ${question.scene ? `<p class="scene">${question.scene}</p>` : ""}
      </article>
      <div class="options-list">
        ${question.options.map((option) => `
          <button class="option-card ${selected === option.id ? "is-selected" : ""}" data-action="answer" data-option="${option.id}">
            <span class="option-letter">${option.id}</span>
            <span>${option.text}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDimensionBars(finalResult) {
  if (finalResult.isEasterEgg) {
    return `<div class="tag-row"><span class="tag-chip">隐藏人格</span><span class="tag-chip">通州校区直达</span></div>`;
  }

  return `
    <div class="dimension-bars" aria-label="四维结果">
      ${Object.entries(dimensionLabels).map(([key, label]) => `
        <div class="dimension-row">
          <span>${label}</span>
          <div class="dimension-track">
            <div class="dimension-fill" style="width: ${Math.max(8, (finalResult.scores[key] / 3) * 100)}%"></div>
          </div>
          <strong>${finalResult.scores[key]} / 3</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderResult() {
  const finalResult = state.finalResult || getFinalResult(state.answers, questions, resultMap, results);
  const result = finalResult.result;
  const secondaryResult = getSecondaryResult(finalResult);
  return `
    <section class="screen result-screen">
      <p class="result-kicker">你的 RUC 毕业人格是</p>
      <h1>${result.name}</h1>
      <p class="english-name">${result.english}</p>
      <div class="result-image-box">
        <img src="${result.imagePlaceholder}" alt="RUCTI 人格 ${result.name} ${result.english} 的 low-poly 插画" loading="lazy" />
      </div>
      ${secondaryResult ? `
        <div class="secondary-result">
          <span>你还沾点</span>
          <strong>${secondaryResult.name}</strong>
          <em>${secondaryResult.english}</em>
        </div>
      ` : ""}
      <article class="report-card">
        <h2>人格报告</h2>
        <p>${result.description}</p>
        <p>${result.blessing}</p>
      </article>
      ${renderDimensionBars(finalResult)}
      <div class="result-actions">
        <button class="primary-button" data-action="share">生成分享图</button>
        <button class="secondary-button" data-action="restart">再测一次</button>
      </div>
      <p class="readme-note">README：本测试纯属娱乐，无意冒犯。作者77。</p>
      <p class="toast" role="status" aria-hidden="true"></p>
    </section>
  `;
}

function render() {
  if (state.page === "quiz") app.innerHTML = renderQuiz();
  else if (state.page === "result") app.innerHTML = renderResult();
  else app.innerHTML = renderStart();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "start") {
    state.currentIndex = Math.min(state.answers.length, questions.length - 1);
    setPage("quiz");
  }
  if (action === "back") goBack();
  if (action === "answer") updateAnswer(questions[state.currentIndex].id, target.dataset.option);
  if (action === "restart") restart();
  if (action === "share") openSharePoster();
  if (action === "close-share") target.closest(".share-modal")?.remove();
});

render();
