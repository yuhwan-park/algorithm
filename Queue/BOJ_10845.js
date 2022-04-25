// https://www.acmicpc.net/problem/10845

// 풀이
// 큐의 뼈대문제 선입선출

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = input.shift();
const queue = [];
const result = [];
for (let i = 0; i < len; i++) {
  const command = input[i].trim().split(" ");
  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      result.push(queue.length !== 0 ? queue.shift() : "-1");
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue.length !== 0 ? "0" : "1");
      break;
    case "front":
      result.push(queue.length !== 0 ? queue[0] : "-1");
      break;
    case "back":
      result.push(queue.length !== 0 ? queue[queue.length - 1] : "-1");
  }
}
console.log(result.join("\n"));
