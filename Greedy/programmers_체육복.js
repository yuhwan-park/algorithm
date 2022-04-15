// https://programmers.co.kr/learn/courses/30/lessons/42862

// 풀이
// 학생 수만큼 true로 채운 배열을 만들고 잃어버린 학생은 false로 여벌이 있는 학생은 god으로 바꾼다.
// 여벌이 있지만 도난당한 학생은 남은 체육복이 하나라 true로 바꾼다.
// 반복문으로 여벌이 있고 앞뒤로 도난당한 학생이 있다면 true로 바꿔준다.
// 여기서 순서가 중요한데 false 'god' false로 앞뒤로 있다면 앞에 있는 학생부터 빌려줘야 중복을 방지할 수 있다.

function solution(n, lost, reserve) {
  const arr = Array(n).fill(true);
  lost.forEach((x) => (arr[x - 1] = false));
  reserve.forEach((x) => (arr[x - 1] = arr[x - 1] === false ? true : "god"));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "god" && arr[i - 1] === false) {
      arr[i] = true;
      arr[i - 1] = true;
    } else if (arr[i] === "god" && arr[i + 1] === false) {
      arr[i] = true;
      arr[i + 1] = true;
    }
  }
  return arr.filter((x) => x).length;
}
