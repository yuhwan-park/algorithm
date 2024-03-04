from collections import deque

# 인접 리스트 방식 그래프 초기화
x, y, z = map(int, input().split())
graph = [[] for _ in range(x + 1)]
for i in range(y):
    n, m = map(int, input().split())
    graph[n].append(m)
    graph[m].append(n)

# 인접 행렬 방식 그래프 초기화
# graph2 = [[0] * (x + 1) for _ in range(x + 1)]
# for _ in range(y):
#     n, m = map(int, input().split())
#     graph2[n][m] = 1
#     graph2[m][n] = 1

for i in range(len(graph)):
    graph[i] = sorted(graph[i])

visited = [False] * (x + 1)

dfsList = []
bfsList = []


def dfs(graph, i, visited):
    visited[i] = True
    dfsList.append(i)
    for j in graph[i]:
        if not visited[j]:
            dfs(graph, j, visited)


def bfs(graph, i, visited):
    q = deque([i])
    visited[i] = True
    while q:
        v = q.popleft()
        bfsList.append(v)
        for k in graph[v]:
            if not visited[k]:
                q.append(k)
                visited[k] = True


dfs(graph, z, visited)
print(*dfsList)
visited = [False] * (x + 1)
bfs(graph, z, visited)
print(*bfsList)
