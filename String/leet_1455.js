// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

isPrefixOfWord("i love eating burger", "burg");

