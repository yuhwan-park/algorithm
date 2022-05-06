// https://www.acmicpc.net/problem/2294

// 풀이
// Dynamic Programming Bottom-Up
// 처음 풀어보는 유형이라 로직 참고함 https://glowdev.tistory.com/26

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ");
input = input.map((x) => +x).sort((a, b) => a - b);

const dp = new Array(+k + 1).fill(Infinity);
dp[0] = 0;
for (let i = 0; i < n; i++) {
  for (let j = input[i]; j <= k; j++) {
    const remain = j - input[i];
    dp[j] = Math.min(dp[j], dp[remain] + 1);
  }
}
console.log(dp[+k] !== Infinity ? dp[+k] : -1);
