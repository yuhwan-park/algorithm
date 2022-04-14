// https://www.acmicpc.net/problem/2576

// 풀이
// 풀이과정은 쉬워서 적을게 없고 논리연산자 활용으로 홀수가 없다면 -1이 출력되도록 한다
// 비슷하게 0이 falsy인 것을 조건문에 적용할 수 있다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

let number = 0;
let smallNum = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 1) {
    number += input[i];
    smallNum.push(input[i]);
  }
}
console.log(number || -1);
if (smallNum.length) console.log(Math.min(...smallNum));
