// https://www.acmicpc.net/problem/11047

// 풀이
// 그리디
// https://hanamon.kr/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%83%90%EC%9A%95%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-greedy-algorithm/
// 가치가 높은 동전 순서로 검사하며 k가 동전보다 클 시 k에서 동전을 나눈 값(동전의 개수)를 저장하고
// k는 k 에서 동전을 나눈 값의 나머지가 된다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
let [len, k] = n.split(" ").map((x) => +x);
arr = arr.map((x) => +x);

let result = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  if (k === 0) {
    break;
  } else if (k >= arr[i]) {
    result += Math.floor(k / arr[i]);
    k = k % arr[i];
  }
}
console.log(result);
