// 백준 1158번 요세푸스 문제
// https://www.acmicpc.net/problem/1158

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(x => Number(x));

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

console.log(`<${result.join(', ')}>`);

// 큐를 이용한 풀이
// count % k === 0 은 결국 k번째 숫자이므로 정답 배열에 넣고
// 아닌 경우는 다시 큐로 넣어서 반복 배열이 되게끔 한다.
