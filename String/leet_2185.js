// https://leetcode.com/problems/counting-words-with-a-given-prefix/

// 풀이
// 문자열의 접두문자를 체크하는 문제이다.
// RegExp, indexOf, startsWith, search 등으로 문제를 풀 수 있다.

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].search(pref) === 0) count++;
  }
  return count;
};

