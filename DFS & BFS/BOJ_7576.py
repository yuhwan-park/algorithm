import sys
from collections import deque

input = sys.stdin.readline
m, n = map(int, input().strip().split())
zero, one = 0, 0
table = []
tomatos = []
for j in range(n):
    temp = []
    for k, x in enumerate(list(map(int, input().strip().split()))):
        if x == 0:
            zero += 1
        if x == 1:
            one += 1
            tomatos.append((j, k))
        temp.append(x)
    table.append(temp)
visited = [[False] * m for _ in range(n)]
if zero == 0:
    print(0)
    exit(0)
if one == 0:
    print(-1)
    exit(0)
q = deque([tomatos])
answer = 0
dx, dy = [1, -1, 0, 0], [0, 0, -1, 1]

while q:
    t = []
    for x, y in q.popleft():
        box = table[x][y]
        visited[x][y] = True
        for i in range(4):
            nx, ny = (x + dx[i], y + dy[i])
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if table[nx][ny] == 0 and not visited[nx][ny]:
                table[nx][ny] = 1
                t.append((nx, ny))
    if t:
        answer += 1
        q.append(t)
for j in range(n):
    for k in range(m):
        if table[j][k] == 0:
            print(-1)
            exit(0)
print(answer)
