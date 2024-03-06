from collections import deque

n = int(input())
m = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
q = deque([1])
visited = [False] * (n + 1)
ans = []
while q:
    x = q.popleft()
    visited[x] = True
    for y in graph[x]:
        if not visited[y]:
            ans.append(y)
            visited[y] = True
            q.append(y)

print(len(set(ans)))
