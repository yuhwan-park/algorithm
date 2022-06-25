// leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      result.push(i);
      break;
    }
  }

  return result;
};

// 다른사람의 풀이
// 가우스 법칙을 이용하여 총합을 구하고 숫자 배열을 순회하며 s 변수에 더해간다.
// 중복되는 숫자가 있다면 s변수에는 더하지 않을테니 총합 - s 를 하면 들어가지 않은 숫자가 구해진다.

var findErrorNums = function (nums) {
  let len = nums.length;
  //     Formula to calculate sum of Airthmetic series
  let sum = (len * (len + 1)) / 2;
  //     Now, just doing the other calculations required
  let s = 0,
    act = 0;
  let obj = {};
  for (let i of nums) {
    if (obj[i]) {
      act = i;
    } else {
      obj[i] = true;
      s += i;
    }
  }
  return [act, sum - s];
};

