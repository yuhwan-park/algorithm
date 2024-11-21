from collections import deque

n, m = map(int, input().split())
arr = [input() for _ in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
I_coord = (0, 0)
for i in range(n):
    if "I" in arr[i]:
        I_coord = (i, arr[i].index("I"))
q = deque([I_coord])
visited = [[False for _ in range(m)] for _ in range(n)]
count = 0
while q:
    x, y = q.popleft()
    if x < 0 or x >= n or y < 0 or y >= m:
        continue
    if visited[x][y] or arr[x][y] == "X":
        continue
    visited[x][y] = True
    if arr[x][y] == "P":
        count += 1

    for i in range(4):
        q.append((x + dx[i], y + dy[i]))

print(count if count > 0 else "TT")
