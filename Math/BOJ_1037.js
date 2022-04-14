// https://www.acmicpc.net/problem/1037

// 풀이
// 제일 큰 약수와 작은 약수를 찾기

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const numbers = input[1].split(" ").map((x) => Number(x));
const result = Math.max(...numbers) * Math.min(...numbers);
console.log(result);
