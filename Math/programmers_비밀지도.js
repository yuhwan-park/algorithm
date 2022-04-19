// https://programmers.co.kr/learn/courses/30/lessons/17681

// 풀이
// 첫번째 반복문에선 각각의 숫자를 2진수로 바꾸고 두번째 반복문에선 2진수를 비교해 벽과 공백을 채워넣는다.
// -----------------------------
// 내 풀이는 만족스럽지 않아서 다른사람의 풀이를 보다가 한줄짜리 풀이를 발견했는데
// (a|b[i]).toString(2).padStart(n,0) ...
// 한줄로 돼있는 OR연산자가 있었다. 처음엔 두개의 원소를 같이 변환하는건가 싶었는데 아니었다.
// 저건 bitwise or 이라는 operator로 양 옆의 원소가 숫자일시 32비트숫자 즉 2진수로 바꾸고 그걸 합쳐버린다.
// 그리고 반환하는건 이 문제에서 원했던 두 2진수를 합친 10진수이다.
// 잘 생각해보면 OR의 단락평가와 같다. 20 | 1 이라고 했을때 20은 10100 , 1은 00001이다
// 각각 하나씩 비교해가며 0 | 1 이면 0은 falsy여도 1이 truthy기 때문에 1이 되는것과 같은 맥락이다.
// 그래서 20 | 1 이 반환하는건 10101 즉 21이다.

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let key1 = arr1[i].toString(2).padStart(n, 0);
    let key2 = arr2[i].toString(2).padStart(n, 0);
    let password = "";
    for (let i = 0; i < n; i++) {
      if (key1[i] === key2[i]) {
        password += key1[i] === "0" ? " " : "#";
      } else {
        password += "#";
      }
    }
    answer.push(password);
  }
  return answer;
}
