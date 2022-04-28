// https://www.acmicpc.net/problem/11279

// 메모리 초과

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

let set = [];
const result = [];
for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    if (set.length > 0) {
      const max = Math.max(...set);
      set = set.filter((x) => x !== max);
      result.push(max);
    } else {
      result.push(0);
    }
  } else {
    set.push(input[i]);
  }
}
console.log(result.join("\n"));
