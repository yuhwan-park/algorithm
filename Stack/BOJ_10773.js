// https://www.acmicpc.net/problem/10773

// 풀이
// 스택의 뼈대문제
// 숫자 배열을 순회하면서 0이라면 pop, 0이 아니라면 숫자를 push

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

const len = input.shift();

const stack = [];

for (let i = 0; i < len; i++) {
  const num = input[i];

  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));

