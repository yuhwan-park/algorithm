// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

/**
 * @param {string} s
 * @return {string}
 */

var modifyString = function (s) {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") {
      arr[i] =
        arr[i - 1] !== "a" && arr[i + 1] !== "a"
          ? "a"
          : arr[i - 1] !== "b" && arr[i + 1] !== "b"
          ? "b"
          : "c";
    }
  }
  return arr.join("");
};

modifyString("?zs");

