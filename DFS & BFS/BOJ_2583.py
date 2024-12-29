import sys
from collections import deque

input = sys.stdin.readline
n, m, k = map(int, input().split())
table = [[0] * n for _ in range(m)]
for _ in range(k):
    x1, y1, x2, y2 = map(int, input().strip().split())
    for i in range(x1, x2):
        for j in range(y1, y2):
            table[i][j] = -1
visited = [[False] * n for _ in range(m)]
dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
count, answer_arr = 0, []
for i in range(m):
    for j in range(n):
        q = deque([(i, j)])
        c = 0
        while q:
            x, y = q.popleft()
            if visited[x][y] or table[x][y] == -1:
                continue
            visited[x][y] = True
            c += 1
            for k in range(4):
                nx, ny = x + dx[k], y + dy[k]
                if nx < 0 or nx >= m or ny < 0 or ny >= n:
                    continue
                q.append((nx, ny))
        if c > 0:
            count += 1
            answer_arr.append(c)
print(count)
print(*sorted(answer_arr))
