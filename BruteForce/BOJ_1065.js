// https://www.acmicpc.net/problem/1065

// 풀이
// 1~99까지는 전부 한수이므로 100~1000까지 반복하면서 한수이면 배열에 추가한다.
// 그 후 한수 배열을 탐색하며 입력 숫자보다 크다면 인덱스를 출력한다(인덱스는 0부터 출발하므로 클 때 출력해야 같거나 작은 한수의 개수를 출력가능)

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = Array.from({ length: 99 }, (_, i) => i + 1);

for (let i = 100; i < 1000; i++) {
  let split = i.toString().split("");
  if (split[0] - split[1] === split[1] - split[2]) {
    arr.push(i);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (+input === 1000 || +input === 999) {
    console.log(144);
    break;
  }
  if (arr[i] > +input) {
    console.log(i);
    break;
  }
}
