// https://leetcode.com/problems/count-largest-group/

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const map = new Map();
  let count = 0;

  for (let i = 1; i <= +n; i++) {
    const sum = i
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);
    if (map.has(sum)) {
      map.get(sum).push(i);
    } else {
      map.set(sum, [i]);
    }
  }
  let maxLen = Math.max(...[...map.values()].map((v) => v.length));
  map.forEach((val, _) => {
    if (val.length === maxLen) count++;
  });
  return count;
};

countLargestGroup(13);

