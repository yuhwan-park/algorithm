// https://www.acmicpc.net/problem/2920

// ----------------------------- 풀이 ----------------------
// output이 정해져있고 input도 1~8까지 정해져있어 단순 구현으로 출력 가능

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((x) => Number(x));

let count = 0;
for (let i = 0; i < input.length - 1; i++) {
  if (input[i] < input[i + 1]) {
    count++;
  }
}
const map = {
  0: "descending",
  7: "ascending",
}[count];
console.log(map || "mixed");
