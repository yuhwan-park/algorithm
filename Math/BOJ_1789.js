// https://www.acmicpc.net/problem/1789

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString();

let sum = 0;
for (let i = 1; i < Infinity; i++) {
  sum += i;
  if (sum > +input) {
    console.log(i - 1);
    break;
  }
}
