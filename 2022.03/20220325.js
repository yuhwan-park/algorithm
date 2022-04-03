// 백준 1874번 스택 수열
// https://www.acmicpc.net/problem/1874
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(x => parseInt(x, 10));

const targetNumber = input.shift();
let num = 0;
const arr = [];
const result = [];
let i = 0;
const flag = true;
while (flag) {
  // input[i] 에 해당하는 숫자가 나오면 (-)
  if (input[i] === arr[arr.length - 1]) {
    arr.pop();
    result.push('-');
    i += 1;
  }
  // 1~N 까지 순서대로 넣기 (넣을때 +)
  if (num < targetNumber && input[i] !== arr[arr.length - 1]) {
    num += 1;
    arr.push(num);
    result.push('+');
  }
  // 주어진 수열의 개수만큼 진행됐다면 가능하므로 while문을 끝내고 정답 출력
  if (i === targetNumber) {
    console.log(result.join('\n'));
    break;
  }
  // 1부터 N까지 숫자는 다 넣었는데 스택의 pop이 마지막 숫자와 다를경우 불가능
  if (num === targetNumber && input[i] !== arr[arr.length - 1]) {
    console.log('NO');
    break;
  }
}
