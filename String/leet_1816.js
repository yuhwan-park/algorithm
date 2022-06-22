/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let splited = s.split(" ");
  if (splited.length >= k) {
    splited = splited.slice(0, k);
  }
  return splited.join(" ");
};
