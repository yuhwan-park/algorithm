// https://leetcode.com/problems/positions-of-large-groups/

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let char = "";
  const answer = [];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (char === s[i] && char !== s[i + 1] && i - temp[0] > 1) {
      temp.push(i);
      answer.push(temp);
      temp = [];
    } else if (char !== s[i]) {
      temp = [];
      temp.push(i);
    }
    char = s[i];
  }

  return answer;
};

largeGroupPositions("abbxxxxzzy");

