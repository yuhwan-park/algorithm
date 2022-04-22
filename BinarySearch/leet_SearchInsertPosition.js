// https://leetcode.com/problems/search-insert-position/

// 풀이
// 이진탐색의 뼈대 문제. 배열의 중간 인덱스를 찾고 조건에 맞지않는 반절을 버린 후 다시 거기서 중간값을 찾는다?
// https://velog.velcdn.com/images%2Fyujo%2Fpost%2Fd5ce571d-c7ff-4317-8e3a-bc36c8936b7f%2F%EC%9D%B4%EC%A7%84%ED%83%90%EC%83%89%EC%A7%84%EC%A7%9C.png

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  } else {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (nums[mid - 1] < target && target < nums[mid]) {
        return mid;
      } else if (nums[0] > target) {
        return 0;
      } else if (nums[nums.length - 1] < target) {
        return nums.length;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
};

// 다른 사람의 풀이

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
