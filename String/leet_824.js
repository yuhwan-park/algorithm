// https://leetcode.com/problems/goat-latin/

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(" ");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i][0])) {
      arr[i] = arr[i] + "ma";
    } else {
      arr[i] = arr[i].slice(1) + arr[i][0] + "ma";
    }

    arr[i] = arr[i] + "a".repeat(i + 1);
  }

  return arr.join(" ");
};

toGoatLatin("I speak Goat Latin");

