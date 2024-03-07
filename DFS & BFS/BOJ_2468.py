import sys

sys.setrecursionlimit(10**6)

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
answer = 0
maxV = 0


def dfs(arr, coord, rain, visited):
    x, y = coord
    if x < 0 or x >= N or y < 0 or y >= N:
        return False
    if visited[x][y] or arr[x][y] <= rain:
        return False
    visited[x][y] = True
    for i in range(4):
        dfs(arr, (x + dx[i], y + dy[i]), rain, visited)
    return True


for i in range(N):
    maxV = max(maxV, max(arr[i]))

for i in range(maxV + 1):
    result = 0
    visited = [[False] * N for _ in range(N)]
    for j in range(N):
        for k in range(N):
            if dfs(arr, (j, k), i, visited) == True:
                result += 1
    answer = max(answer, result)

print(answer)
