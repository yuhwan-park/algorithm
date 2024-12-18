def check(x):
    for i in range(x):
        if board[x] == board[i] or abs(board[x] - board[i]) == abs(x - i):
            return False
    return True


def dfs(start):
    global answer
    if start == n:
        answer += 1
        return

    for i in range(n):
        board[start] = i
        if check(start):
            dfs(start + 1)


n = int(input())
board = [0] * n
answer = 0
dfs(0)
print(answer)
