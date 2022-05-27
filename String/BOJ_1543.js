// https://www.acmicpc.net/problem/1543

// 풀이
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// matchAll 메소드는 match되는 목록을 RegExpStringIterator에 담아 반환한다.
// 배열에 spread operator로 풀어서 담아 각각의 요소를 확인할 수 있다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let [doc, target] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = doc.matchAll(target);

console.log([...result].length);
