// https://www.acmicpc.net/problem/17298

// --------------------------------------- 풀이 ------------------------------------
// 처음에 2중반복문으로 풀이를 했지만 시간초과가 떠서 구글 서칭을 하였다.
// 괜히 스택으로 분류된 문제가 아니라 스택을 이용한 풀이법이 정답이었다.
// 정답 배열을 -1로 초기화를 하고 반복문으로 스택에 인덱스를 넣는다.
// 스택에 인덱스를 넣는다는 생각을 아예 하지 못했었다.
// 만약 스택이 비어있지 않고 수열의 n번째 수가 스택에 저장한 인덱스를 수열에 적용한 수보다 크다면
// 스택에서 그 인덱스를 빼내어 정답배열을 n번째 수로 채운다
// while문을 사용하여 조건이 맞다면 계속 비교하면서 정답 배열을 채우고 채워지지 않는 곳은 기본값인 -1이 된다
// 참고 : https://minse5k.github.io/boj-17298/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// --------------------------------------- 통과 ------------------------------------
const numbers = input[1].split(" ").map((x) => Number(x));
const result = new Array(+input[0]).fill(-1);
const stack = [];

for (let i = 0; i < numbers.length; i++) {
  while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
    result[stack.pop()] = numbers[i];
  }
  stack.push(i);
}
console.log(result.join(" "));

// -------------------------------------- 시간 초과 -------------------------------
const numbers1 = input[1]
  .trim()
  .split(" ")
  .map((x) => Number(x));
const result1 = [];
for (let i = 0; i < numbers1.length; i++) {
  let nge = -1;
  for (let j = i + 1; j < numbers1.length; j++) {
    if (numbers1[i] < numbers1[j]) {
      nge = numbers1[j];
      break;
    }
  }
  result1.push(nge);
}
console.log(result1.join(" "));
