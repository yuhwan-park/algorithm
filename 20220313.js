function solution(n) {
  const Ternary = [];
  while (true) {
    Ternary.push(n % 3);
    n = parseInt(n / 3);
    if (n < 3) {
      Ternary.push(n);
      break;
    }
  }
  let answer = 0;
  for (let i = 0; i < Ternary.length; i++) {
    const element = Ternary[i];
    answer += element * 3 ** (Ternary.length - (i + 1));
  }
  return answer;
}
