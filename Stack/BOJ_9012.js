// https://www.acmicpc.net/problem/9012

// 풀이
// 여는 괄호는 1 닫는 괄호는 -1을 더해가면서 count가 음수가 나온다면 그 순간 여는 괄호와 닫는 괄호의 짝이 안맞기 때문에 VPS가 아니다.
// 루프를 다 돌고 난후 count가 0이라면 괄호의 짝이 맞기 때문에 VPS이다.
// 1과 -1을 2개의 스택이라고 볼 수 있다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = input.shift();
const result = [];
for (let i = 0; i < len; i++) {
  let count = 0;
  const element = input[i];
  for (let j = 0; j < element.length; j++) {
    count += element[j] === "(" ? 1 : -1;
    if (count < 0) {
      break;
    }
  }
  result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
