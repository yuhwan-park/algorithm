// https://www.acmicpc.net/problem/17299

// 풀이
// 오른쪽에 있는 인덱스만 비교해야하니 해결되지않는 인덱스는 스택에 넣어놓고
// 스택에 있는 인덱스보다 지금 인덱스가 클 때만 while이 돌아가고
// 스택의 요소를 제거해나간다

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[1].split(" ");

const map = {};
input.forEach((x) => {
  map[x] = ++map[x] || 1;
});
const result = new Array(input.length).fill(-1);
const stack = [];
for (let i = 0; i < input.length; i++) {
  while (stack.length && map[input[stack[stack.length - 1]]] < map[input[i]]) {
    result[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(result.join(" "));
