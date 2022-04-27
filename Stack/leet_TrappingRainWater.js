// https://leetcode.com/problems/trapping-rain-water/

// 풀이
// 해결책 3개 1,2번째는 내가 썼고 3번째는 시간복잡도 때문에 도저히 안풀려서 답을 보았다.
// 1번 다이나믹 프로그래밍 O(n) (maxRight가 갱신이 너무 많이 될 경우 slice때문에 시간초과)
// 2번 브루트포스 O(n^2)
// 3번 다이나믹 프로그래밍 O(n)

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

// function trap(height) {
//   if (height == null || height.length === 0) return 0;
//   debugger;
//   let res = 0;
//   let l = height.length;
//   let lMax = {};
//   let rMax = {};

//   lMax[0] = height[0];
//   for (let i = 1; i < l; i++) {
//     lMax[i] = Math.max(height[i], lMax[i - 1]);
//   }

//   rMax[l - 1] = height[l - 1];
//   for (let i = l - 2; i >= 0; i--) {
//     rMax[i] = Math.max(height[i], rMax[i + 1]);
//   }

//   for (let i = 0; i < height.length; i++) {
//     res += Math.min(lMax[i], rMax[i]) - height[i];
//   }
//   return res;
// }
