// https://www.acmicpc.net/problem/5598

// 풀이
// ascii 코드 변환 메소드를 상기시킬 수 있는 문제
// 문자를 ascii 코드로 변환 후 3을 빼서 다시 문자로 바꾼다.
// C부터는 3을 빼면 특수 기호가 되므로 26을 더해서 3을 뺀다

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString();

const ascii = [];
for (let i = 0; i < input.length; i++) {
  const ascNum = input.charCodeAt(i);
  ascii.push(
    String.fromCharCode(ascNum - 3 < 65 ? ascNum + 26 - 3 : ascNum - 3)
  );
}
console.log(ascii.join(""));
