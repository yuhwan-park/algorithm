// https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch) + 1;
  if (!index) return word;

  let temp = word.slice(0, index).split("").reverse().join("");

  return temp + word.slice(index);
};

