R, C = map(int, input().split())
board = [input() for _ in range(R)]
dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
max_value = 0
q = set()
q.add((0, 0, board[0][0]))

while q:
    x, y, visited = q.pop()
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < R and 0 <= ny < C and not board[nx][ny] in visited:
            q.add((nx, ny, visited + board[nx][ny]))

    max_value = max(max_value, len(visited))

print(max_value)


# 백트래킹 DFS 문제로 푸는게 정석
# def dfs(x, y, count):
#     global answer
#     answer = max(answer, count)

#     for i in range(4):
#         nx = dx[i] + x
#         ny = dy[i] + y
#         if nx <= -1 or nx >= r or ny <= -1 or ny >= c:
#             continue
#         if visited[ord(alphaGrid[nx][ny]) - 65] == 0:
#             visited[ord(alphaGrid[nx][ny]) - 65] = 1
#             dfs(nx, ny, count+1)
#             visited[ord(alphaGrid[nx][ny]) - 65] = 0
