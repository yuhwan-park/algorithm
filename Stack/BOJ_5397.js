// https://www.acmicpc.net/problem/5397

// 풀이
// 2개의 스택을 이용하여 커서를 구현
// 비슷한 문제 : https://www.acmicpc.net/problem/1406

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const len = input.shift();

const result = [];

for (let i = 0; i < len; i++) {
  const Lstack = [];
  const Rstack = [];
  const key = input[i].trim().split("");
  for (let j = 0; j < key.length; j++) {
    switch (key[j]) {
      case "<":
        if (Lstack.length) Rstack.push(Lstack.pop());
        break;
      case ">":
        if (Rstack.length) Lstack.push(Rstack.pop());
        break;
      case "-":
        if (Lstack.length) Lstack.pop();
        break;
      default:
        Lstack.push(key[j]);
        break;
    }
  }
  result.push(Lstack.concat(Rstack.reverse()).join(""));
}
console.log(result.join("\n"));
