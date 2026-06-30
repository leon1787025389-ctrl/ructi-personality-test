const ANSWERS_KEY = "ructi_answers";
const RESULT_KEY = "ructi_result";

export function loadAnswers() {
  try {
    return JSON.parse(localStorage.getItem(ANSWERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveAnswers(answers) {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function loadResult() {
  try {
    return JSON.parse(localStorage.getItem(RESULT_KEY) || "null");
  } catch {
    return null;
  }
}

export function saveResult(result) {
  localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function clearStorage() {
  localStorage.removeItem(ANSWERS_KEY);
  localStorage.removeItem(RESULT_KEY);
}
