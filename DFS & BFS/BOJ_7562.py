from collections import deque

T = int(input())
for _ in range(T):
    N = int(input())
    cur_x, cur_y = map(int, input().split())
    target_x, target_y = map(int, input().split())
    dx, dy = [-2, -1, 2, 1, -2, -1, 2, 1], [-1, -2, -1, -2, 1, 2, 1, 2]
    answer = float("inf")
    q = deque([(cur_x, cur_y, 0)])
    visited = [[False] * N for _ in range(N)]
    while q:
        x, y, count = q.popleft()
        if visited[x][y]:
            continue
        if x == target_x and y == target_y:
            answer = min(answer, count)
            break
        visited[x][y] = True
        for i in range(8):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= N:
                continue
            q.append((nx, ny, count + 1))
    print(answer)
