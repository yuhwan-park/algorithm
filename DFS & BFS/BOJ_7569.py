import sys
from collections import deque

input = sys.stdin.readline
m, n, h = map(int, input().strip().split())
zero, one = 0, 0
height_map = {}
visited = {}
tomatos = []
for i in range(h):
    temp = []
    for j in range(n):
        temp2 = []
        for k, x in enumerate(list(map(int, input().strip().split()))):
            if x == 0:
                zero += 1
            if x == 1:
                one += 1
                tomatos.append((j, k, i))
            temp2.append(x)
        temp.append(temp2)
    height_map[i] = temp
    visited[i] = [[False] * m for _ in range(n)]
if zero == 0:
    print(0)
    exit(0)
if one == 0:
    print(-1)
    exit(0)
q = deque([tomatos])
answer = 0
dx, dy, dh = [1, -1, 0, 0, 0, 0], [0, 0, -1, 1, 0, 0], [0, 0, 0, 0, 1, -1]
while q:
    t = []
    for x, y, H in q.popleft():
        box = height_map[H][x][y]
        visited[H][x][y] = True
        for i in range(6):
            nx, ny, nh = (x + dx[i], y + dy[i], H + dh[i])
            if nx < 0 or nx >= n or ny < 0 or ny >= m or nh < 0 or nh >= h:
                continue
            if height_map[nh][nx][ny] == 0 and not visited[nh][nx][ny]:
                height_map[nh][nx][ny] = 1
                t.append((nx, ny, nh))
    if t:
        answer += 1
        q.append(t)
for i in range(h):
    for j in range(n):
        for k in range(m):
            if height_map[i][j][k] == 0:
                print(-1)
                exit(0)
print(answer)
