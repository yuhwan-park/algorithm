// https://www.acmicpc.net/problem/3085

// 풀이
// 2차원 배열을 이용해서 arr[i][j] 라고 했을 때 i가 늘어나면 열 탐색 j가 늘어나면 행 탐색이 된다.
// 반복문으로 배열을 탐색하면서 현재 사탕과 다음 사탕이 다르다면 위치를 바꾼 후
// check 함수로 열과 행을 따로 체크하면서 최대 사탕 갯수를 센다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const len = +input.shift();
const arr = [];
let maxCount = 1;
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].trim().split(""));
}

const isMax = (cnt) => {
  maxCount = maxCount < cnt ? cnt : maxCount;
};
const check = (arr) => {
  for (let i = 0; i < len; i++) {
    let rowCount = 1,
      colCount = 1;
    for (let j = 0; j < len; j++) {
      if (arr[i][j + 1] && arr[i][j] === arr[i][j + 1]) {
        rowCount++;
        isMax(rowCount);
      } else {
        rowCount = 1;
      }
      if (arr[j + 1] && arr[j][i] === arr[j + 1][i]) {
        colCount++;
        isMax(colCount);
      } else {
        colCount = 1;
      }
    }
  }
};
for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    // Row Swap
    if (arr[i][j + 1] && arr[i][j] !== arr[i][j + 1]) {
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
      check(arr);
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
    }
    // Column Swap
    if (arr[j + 1] && arr[j][i] !== arr[j + 1][i]) {
      [arr[j][i], arr[j + 1][i]] = [arr[j + 1][i], arr[j][i]];
      check(arr);
      [arr[j][i], arr[j + 1][i]] = [arr[j + 1][i], arr[j][i]];
    }
  }
}
console.log(maxCount);
