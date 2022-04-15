// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

// 풀이
// 너무 하드코딩이라 풀이할게 없음.
// 날짜 관련은 new Date() 사용가능
function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const year = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let cnt = b - 1;
  if (a !== 1) for (let i = 0; i < a; i++) cnt += year[i];
  return week[cnt % 7];
}
