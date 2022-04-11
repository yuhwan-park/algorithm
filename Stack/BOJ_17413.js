// https://www.acmicpc.net/problem/17413

// ----------------------------- 풀이 -------------------------------
// strArr 에 문자를 쪼개 배열에 넣고 하나씩 shift 해간다.
// 1.'<' 를 만날 경우 '>' 가 나올 때까지 while문을 돌리고 '>' 까지 넣어주기 위해 한번 더 shift
// 2. 태그 안이 아닌데 공백을 만날 경우 정답 배열에 넣는다
// 3. 뒤집어줘야 하는 문자열은 태그 안도 아니고 공백으로 구분돼있지 않은 2자 이상의 문자열이다.
// 태그나 공백을 만나면 while문을 종료하고 뒤집어서 정답배열에 넣는다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString();

const result = [];
const strArr = input.split("");
let reverse = [];

while (strArr.length > 0) {
  if (strArr[0] === "<") {
    while (strArr[0] !== ">") {
      result.push(strArr.shift());
    }
    result.push(strArr.shift());
  } else if (strArr[0] === " ") {
    result.push(strArr.shift());
  } else {
    while (strArr[0] !== "<" && strArr[0] !== " ") {
      reverse.push(strArr.shift());
      if (strArr.length === 0) break;
    }
    result.push(reverse.reverse().join(""));
    reverse = [];
  }
}
console.log(result.join("").replace(/\n/g, "")); // replace는 백준 입출력 버그로 인해 기입
