// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = {};
  const result = [];
  const answer = [];

  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i.toString();
  }

  for (let i = 0; i < list2.length; i++) {
    if (map[list2[i]]) {
      result.push([list2[i], +map[list2[i]] + i]);
    }
  }

  result.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === result[0][1]) {
      answer.push(result[i][0]);
    }
  }
  return answer;
};

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
);

