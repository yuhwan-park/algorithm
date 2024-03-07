from collections import deque
import sys

input = sys.stdin.readline
n, m = map(int, input().split())
graph = [[] for _ in range(n)]
graph.append([])
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
visited = [False] * (n + 1)
ans = 0
for i in range(1, len(graph)):
    q = deque([i])
    if not visited[i]:
        ans += 1
        while q:
            val = q.popleft()
            if not visited[val]:
                for num in graph[val]:
                    q.append(num)
                    visited[val] = True

print(ans)
