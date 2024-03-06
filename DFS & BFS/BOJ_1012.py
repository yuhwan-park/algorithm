import sys

sys.setrecursionlimit(10**6)

t = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]


for _ in range(t):
    M, N, K = map(int, input().split())
    graph = [[0] * N for _ in range(M)]
    for _ in range(K):
        x, y = map(int, input().split())
        graph[x][y] = 1
    ans = 0

    def dfs(x, y):
        if x < 0 or y < 0 or y >= N or x >= M:
            return False

        if graph[x][y] == 1:
            graph[x][y] = 0
            for i in range(4):
                dfs(x + dx[i], y + dy[i])
            return True
        return False

    for i in range(M):
        for j in range(N):
            if dfs(i, j) == True:
                ans += 1
    print(ans)
