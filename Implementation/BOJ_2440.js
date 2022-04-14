// https://www.acmicpc.net/problem/2440

// ---------------------------------------- 풀이 --------------------------------
// 간단한 구현 문제

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString();

for (let i = 0; i < input; i++) {
  console.log("*".repeat(input - i));
}
