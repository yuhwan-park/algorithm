// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

// 풀이
// padEnd로 문자열을 주어진 정답배열로 채우고 filter로 검사

function solution(answers) {
  const p1 = ""
    .padEnd(answers.length, "12345")
    .split("")
    .filter((x, i) => x == answers[i]).length;
  const p2 = ""
    .padEnd(answers.length, "21232425")
    .split("")
    .filter((x, i) => x == answers[i]).length;
  const p3 = ""
    .padEnd(answers.length, "3311224455")
    .split("")
    .filter((x, i) => x == answers[i]).length;
  const result = [];
  const group = [p1, p2, p3];
  const topRate = Math.max(p1, p2, p3);
  for (let i = 0; i < 3; i++) {
    if (topRate === group[i]) {
      result.push(i + 1);
    }
  }
  return result;
}
