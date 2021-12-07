export const saveScoreInLocalStorage = (score, text) =>
  localStorage.setItem(text, JSON.stringify(score));

export const getScoreFromLocalStorage = (text) =>
  JSON.parse(localStorage.getItem(text)) || "no score yet";
