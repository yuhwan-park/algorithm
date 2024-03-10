import sys

sys.setrecursionlimit(10**6)
answer = []

while True:
    n, m = map(int, input().split())
    if n + m == 0:
        print(*answer, sep="\n")
        exit(0)
    arr = [list(map(int, input().split())) for _ in range(m)]
    dx = [1, -1, 0, 0, 1, 1, -1, -1]
    dy = [0, 0, -1, 1, 1, -1, -1, 1]
    visited = [[False] * n for _ in range(m)]
    ans = 0

    def dfs(x, y):
        if x < 0 or y < 0 or x >= m or y >= n:
            return
        if arr[x][y] == 0:
            return
        if not visited[x][y]:
            visited[x][y] = True
            for i in range(8):
                nx, ny = (x + dx[i], y + dy[i])
                dfs(nx, ny)

    for i in range(m):
        for j in range(n):
            if not visited[i][j] and arr[i][j] == 1:
                ans += 1
                dfs(i, j)
    answer.append(ans)
