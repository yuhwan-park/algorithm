// https://programmers.co.kr/learn/courses/30/lessons/12940

// 풀이
// 유클리드 호제법을 통해 재귀함수로 최대공약수를 구하고
// n 과 m 의 최대공약수를 알고있을때 n * m / 최대공약수 = 최소공배수의 공식이 성립된다.
// https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95
// 간단히 설명하자면 a,b가 있을 때 a / b 가 나누어 떨어지지 않는다면 그 나머지를 b에다 다시 나눈다.
// 나누어 떨어질때까지 반복하면 그 나머지가 최대공약수가 된다.

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

function solution(n, m) {
  const gcdNum = gcd(n, m);
  return [gcdNum, (n * m) / gcdNum];
}
