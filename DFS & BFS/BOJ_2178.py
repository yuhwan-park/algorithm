from collections import deque

n, m = map(int, input().split())
arr = [list(map(int, input())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
visited = [[False] * m for _ in range(n)]


def bfs(arr, dir, visited):
    x, y = dir
    q = deque([(x, y)])
    visited[x][y] = True

    while q:
        x, y = q.popleft()
        for i in range(4):
            if x + dx[i] < 0 or y + dy[i] < 0 or x + dx[i] >= n or y + dy[i] >= m:
                continue
            if arr[x + dx[i]][y + dy[i]] == 0 or visited[x + dx[i]][y + dy[i]]:
                continue
            arr[x + dx[i]][y + dy[i]] = arr[x][y] + 1
            visited[x + dx[i]][y + dy[i]] = True
            q.append((x + dx[i], y + dy[i]))


bfs(arr, (0, 0), visited)
print(arr[n - 1][m - 1])
