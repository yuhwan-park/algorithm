// https://www.acmicpc.net/problem/1541

// 그리디,문자열파싱
// replace의 2번째 인자로 함수를 넘기면 검색된 문자열이 매개변수로 들어온다.
// 최소값을 구하기 위해서 덧셈을 먼저 계산하고 뺄셈을 먼저 해주면 된다.
// reduce는 초기값을 넘기지 않으면 첫번째 요소가 초기값이 되고 2번째 요소부터 콜백함수가 적용된다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let input = fs.readFileSync(filePath).toString().trim();
const findPlus = /\d{1,}\+\d{1,}/g;

while (input.match(findPlus)) {
  input = input.replace(findPlus, (str) => {
    const splited = str.split("+");
    const newNum = (+splited[0] + +splited[1]).toString();
    return newNum;
  });
}

input = input.split("-").reduce((acc, cur) => acc - cur);
console.log(input);
