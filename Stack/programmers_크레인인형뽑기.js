// https://programmers.co.kr/learn/courses/30/lessons/64061

// 풀이는 주석으로

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  const move = moves.map((x) => x - 1); // index화
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][move[i]]) {
        // board의 move[i]번째를 순회하면서 빈칸(0)이 아니면
        let pick = board[j][move[i]]; // 이번 순서의 인형
        board[j][move[i]] = 0; // 인형이 있던 자리는 빈칸으로
        stack.push(pick); // 인형 스택에 넣기
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          // 인형을 넣은 시점에서 스택 마지막 두칸이 똑같다면 카운트를 올리고 마지막 두 요소를 지운다
          answer += 2;
          stack = stack.slice(0, stack.length - 2);
        }
        break;
      }
    }
  }
  return answer;
}
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
); // 4311324
