/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let sum = 0;
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

  for (let [num, weight] of boxTypes) {
    if (truckSize - num < 0) {
      sum += truckSize * weight;
      return sum;
    } else {
      sum += num * weight;
      truckSize -= num;
    }
  }
  return sum;
};

