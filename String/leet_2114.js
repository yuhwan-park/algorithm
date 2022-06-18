// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  const lengths = sentences.map((s) => s.split(" ").length);
  return Math.max(...lengths);
};

// Runtime: 85 ms, faster than 57.91%
// Memory Usage: 44.4 MB, less than 43.20%

