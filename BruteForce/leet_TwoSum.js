// https://leetcode.com/problems/two-sum/

// ---------------------------------- 풀이 ---------------------------------
// 삽입정렬 방법으로 loop를 돌면서 타겟넘버에 맞는경우 즉시 리턴한다
// 시간복잡도는 최선은 O(n)이고 최악은 O(n^2)이다.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// ---------------------------------- 모범답안 ---------------------------------
// 해쉬안에 key는 배열의 원소, 값은 배열의 인덱스로 저장을 하고
// 만약 target - n 이 해쉬의 key값으로 있다면 바로 인덱스를 리턴한다.
// 시간복잡도는 O(n)이다.
// [2,7,5,3]이고 target은 9라면 hash는 2 : 0 이 저장될테고 바로 다음 원소 7을 9에 빼면 2니까
// hash[2] = 0 이기때문에 [0,1] 을 리턴한다.

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
