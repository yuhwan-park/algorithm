// https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

// 풀이
// 아스키코드
//

function solution(s, n) {
  const asciiArr = s.split("").map((x) => (x === " " ? x : x.charCodeAt(0)));
  const result = asciiArr.map((s) => {
    if (s === " ") return s;
    if (s <= 90) {
      s += s + n > 90 ? -26 + n : n;
      return String.fromCharCode(s);
    }
    if (s <= 122) {
      s += s + n > 122 ? -26 + n : n;
      return String.fromCharCode(s);
    }
  });
  return result.join("");
}
