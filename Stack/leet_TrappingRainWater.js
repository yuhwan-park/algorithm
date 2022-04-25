// https://leetcode.com/problems/trapping-rain-water/

// 미해결 (시간복잡도 문제)
// 스택, 투포인터, 다이나믹 프로그래밍

var trap = function (height) {
  let answer = 0;
  let maxLeft = 0;
  let maxRight = Math.max(...height);
  for (let i = 0; i < height.length; i++) {
    if (maxRight === height[i]) {
      maxRight = Math.max(...height.slice(i + 1));
    }
    const water = Math.min(maxLeft, maxRight) - height[i];
    if (water > 0) answer += water;
    maxLeft = maxLeft < height[i] ? height[i] : maxLeft;
  }
  return answer;
};

// var trap = function (height) {
//   let answer = 0;
//   for (let i = 0; i < height.length; i++) {
//     const left = Math.max(...height.slice(0, i));
//     const right = Math.max(...height.slice(i + 1));
//     if (left > height[i] && right > height[i]) {
//       let min = Math.min(left, right);
//       answer += min - height[i];
//     }
//   }
//   return answer;
// };
