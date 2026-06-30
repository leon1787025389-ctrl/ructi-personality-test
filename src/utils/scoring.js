const dimensions = ["school", "food", "social", "study"];

export function calculateScores(answers, questions) {
  const scores = { school: 0, food: 0, social: 0, study: 0 };
  const tags = {};

  for (const answer of answers) {
    const question = questions.find((item) => item.id === answer.questionId);
    const option = question?.options.find((item) => item.id === answer.optionId);
    if (!option) continue;

    for (const [key, value] of Object.entries(option.scores || {})) {
      scores[key] = (scores[key] || 0) + value;
    }

    for (const [key, value] of Object.entries(option.tags || {})) {
      tags[key] = (tags[key] || 0) + value;
    }
  }

  return { scores, tags };
}

export function getLevels(scores) {
  return Object.fromEntries(dimensions.map((key) => [key, scores[key] >= 2 ? "high" : "low"]));
}

export function getResultKey(levels) {
  return dimensions.map((key) => levels[key]).join("_");
}

export function getFinalResult(answers, questions, resultMap, results) {
  const { scores, tags } = calculateScores(answers, questions);
  if ((tags.tongxian || 0) >= 1) {
    return { result: results.TONGXIAN, scores, tags, levels: null, isEasterEgg: true };
  }

  const levels = getLevels(scores);
  const resultId = resultMap[getResultKey(levels)] || "JUST_RUCER_2";
  return { result: results[resultId], scores, tags, levels, isEasterEgg: false };
}
