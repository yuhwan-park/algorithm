import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().strip().split())
table = [list(map(int, input().strip().split())) for _ in range(n)]
visited = [[False] * m for _ in range(n)]
dx, dy = [1, -1, 0, 0], [0, 0, -1, 1]
count = 0
max_picture = 0
for i in range(n):
    for j in range(m):
        if visited[i][j] or table[i][j] == 0:
            continue
        count += 1
        pictures = 0
        q = deque([(i, j)])
        while q:
            x, y = q.popleft()
            if visited[x][y]:
                continue
            visited[x][y] = True
            pictures += 1
            for k in range(4):
                nx, ny = x + dx[k], y + dy[k]
                if 0 <= nx < n and 0 <= ny < m and table[nx][ny] == 1:
                    q.append((nx, ny))
        max_picture = max(max_picture, pictures)
print(count)
print(max_picture)
