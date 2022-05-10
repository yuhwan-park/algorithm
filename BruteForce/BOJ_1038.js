// https://www.acmicpc.net/problem/1038

// 풀이
// 감소하는 수의 경우의 수를 배열에 넣어 n번째 감소하는 수를 출력
// bp 함수 로직
//           3
//     32        31   30
//   321 320   310

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result = [];

if (+input > 1022) {
  console.log(-1);
} else {
  for (let i = 0; i < 10; i++) {
    bp(i, 1);
  }
  result.sort((a, b) => a - b);
  console.log(result[input]);
}

function bp(num, idx) {
  if (idx > 10) return;
  result.push(num);
  for (let i = 0; i < num % 10; i++) {
    bp(num * 10 + i, idx + 1);
  }
}
