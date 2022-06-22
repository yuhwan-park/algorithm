// https://leetcode.com/problems/number-of-lines-to-write-string/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 0;
  let pixel = 0;
  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - 97];
    if (pixel + width > 100) {
      lines++;
      pixel = 0;
      i--;
      continue;
    }
    pixel += width;
  }
  return [lines + 1, pixel];
};

