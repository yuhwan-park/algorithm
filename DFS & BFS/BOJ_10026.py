from collections import deque
import sys

input = sys.stdin.readline
N = int(input())
arr = [list(map(str, input())) for _ in range(N)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
sum1 = 0
sum2 = 0


for mode in ["RG", "RGB"]:
    visited = [[False] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if visited[i][j]:
                continue
            color = arr[i][j]
            q = deque([(i, j)])
            if mode == "RGB":
                sum1 += 1
            else:
                sum2 += 1
            while q:
                x, y = q.popleft()
                if visited[x][y]:
                    continue
                visited[x][y] = True
                for k in range(4):
                    nx, ny = (x + dx[k], y + dy[k])
                    if 0 <= nx < N and 0 <= ny < N:
                        if mode == "RGB" and arr[nx][ny] == color:
                            q.append((nx, ny))
                        elif (
                            mode == "RG" and color in mode and arr[nx][ny] in mode
                        ) or (mode == "RG" and color == "B" and arr[nx][ny] == "B"):
                            q.append((nx, ny))

print(f"{sum1} {sum2}")
