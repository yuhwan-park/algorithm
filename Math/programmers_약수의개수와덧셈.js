// https://programmers.co.kr/learn/courses/30/lessons/77884

// 풀이
// 약수의 개수 구하기

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    answer += count % 2 === 0 ? i : i * -1;
  }
  return answer;
}

// -----------------------------------
// 너무 간단한 문제지만 다른사람의 풀이가 너무 좋았기에 저장
// 제곱근이 정수면 약수의 개수는 무조건 홀수다 라는 공식이 있다 카더라

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
