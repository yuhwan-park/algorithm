// https://www.acmicpc.net/problem/1158

// 풀이
// 큐에 1부터 n까지의 숫자를 넣고 k번째 인덱스라면 정답 배열에 넣고 아니라면 큐 배열의 뒷부분으로 다시 넣는다.
// 큐가 빌 때까지 반복한다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

const [n, k] = input;
const queue = [];
const result = [];
let count = 1;
for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}
while (queue.length) {
  const shiftQueue = queue.shift();
  if (count % k === 0) {
    result.push(shiftQueue);
  } else {
    queue.push(shiftQueue);
  }
  count += 1;
}

console.log(`<${result.join(", ")}>`);
