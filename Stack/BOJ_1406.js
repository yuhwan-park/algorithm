// https://www.acmicpc.net/problem/1406

// 풀이
// 스택 2개를 이용해 커서를 구현

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const Lstack = input.shift().trim().split("");
const len = input.shift();
const Rstack = [];
for (let i = 0; i < len; i++) {
  switch (input[i][0]) {
    case "L":
      if (Lstack.length !== 0) {
        Rstack.push(Lstack.pop());
      }
      break;
    case "D":
      if (Rstack.length !== 0) {
        Lstack.push(Rstack.pop());
      }
      break;
    case "B":
      if (Lstack.length !== 0) {
        Lstack.pop();
      }
      break;
    case "P":
      Lstack.push(input[i][2]);
      break;
  }
}
console.log(Lstack.concat(Rstack.reverse()).join(""));
