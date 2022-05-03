// https://www.acmicpc.net/problem/1697

// 풀이
// 재귀함수로 삼진트리를 만들고 visited 배열로 중복탐색을 방지한다.
// myFunc가 호출 될때마다 트리의 레벨이 내려가므로 count를 1씩 더해준다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const visited = Array.from({ length: 100000 }, () => true);
const [position, target] = input;
let count = 0;
function myFunc(arr) {
  if (position === target) return 0;
  const tempSet = new Set();
  let plus, minus, multiply;
  count++;
  for (let val of arr) {
    if (visited[val]) {
      plus = val + 1;
      minus = val - 1;
      multiply = val * 2;
      if (plus === target || minus === target || multiply === target) {
        return count;
      }
      tempSet.add(plus);
      tempSet.add(minus);
      tempSet.add(multiply);
      visited[val] = false;
    }
  }
  myFunc(tempSet);
}
myFunc([position]);
console.log(count);
