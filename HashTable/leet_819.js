// https://leetcode.com/problems/most-common-word/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const m = new Map();
  paragraph
    .toLowerCase()
    .match(/\w{1,}/g)
    .forEach((word) => {
      if (m.has(word)) {
        m.set(word, m.get(word) + 1);
      } else {
        m.set(word, 1);
      }
    });

  const sorted = Array.from(m).sort((a, b) => b[1] - a[1]);

  for (let [word, times] of sorted) {
    if (!banned.includes(word)) return word;
  }
};

