// https://programmers.co.kr/learn/courses/30/lessons/12921

// 풀이
// 에라토스테네스의 체를 이용하여 풀 수 있는 문제
// 반복문으로 해결할 순 있지만 시간과 효율성의 차원이 다르다.
// 에라토스테네스의 체란 2부터 n까지의 수까지 나열한 후 소수의 배수를 지워나가는 방식이다.
// ex) 2는 소수이므로 2를 제외한 2의 배수를 전부 지운다. n까지 하면 결국 남아있는건 소수 뿐이다.
// 2단계 for문이 그 과정이다.
// 답 출력은 true만을 남기고 0과 1의 인덱스가 있으니 2를 빼준다.

function solution(n) {
  const arr = new Array(n + 1).fill(true);
  const end = Math.sqrt(n);

  for (let i = 2; i <= end; ++i) {
    if (arr[i] === false) {
      continue;
    }
    for (let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }
  return arr.filter((x) => x).length - 2;
}
