function solution(s) {
  if (s % 2 === 0) {
    return s.slice(s.length / 2).slice(0);
  } else {
    return s.slice(s.length / 2 + 1).slice(0, 2);
  }
}
