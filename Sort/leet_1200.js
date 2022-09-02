/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let minAbs = Infinity;
  let res = [];
  const hash = {};
  arr = arr.sort((a, b) => {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    minAbs = Math.min(Math.abs(bigger - smaller), minAbs);
    if (!hash[a] || !hash[b]) {
      hash[a] = true;
      hash[b] = true;
    }
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i] + minAbs]) {
      res.push([arr[i], arr[i] + minAbs]);
    }
  }

  return res;
};

minimumAbsDifference([4, 2, 1, 3]);

