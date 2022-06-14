// https://www.acmicpc.net/problem/18258

// 풀이
// 큐의 기본 뼈대문제(선입선출)
// 문제 지시사항을 그대로 구현하면 된다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const answer = [];
const q = [];
for (let i = 1; i < input.length; i++) {
  const [key, value] = input[i].trim().split(" ");

  switch (key) {
    case "push":
      q.push(value);
      break;
    case "pop":
      answer.push(q.length ? q.shift() : -1);
      break;
    case "size":
      answer.push(q.length);
      break;
    case "empty":
      answer.push(q.length ? 0 : 1);
      break;
    case "front":
      answer.push(q.length ? q[0] : -1);
      break;
    case "back":
      answer.push(q.length ? q[q.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
