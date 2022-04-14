// https://www.acmicpc.net/problem/3460

// 풀이는 주석으로
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const len = input.shift();
const answer = [];
for (let i = 0; i < len; i++) {
  const res = [];
  Number(input[i]) // input[i] = 13
    .toString(2) // 1101
    .split("") // [1,1,0,1]
    .reverse() // [1,0,1,1]
    .map((x, i) => {
      // res = [0,2,3]
      if (x === "1") res.push(i);
    });
  answer.push(res.join(" ")); // answer = ['0 2 3']
}
console.log(answer.join("\n"));
