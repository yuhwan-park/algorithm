import sys

sys.setrecursionlimit(10**6)

input = sys.stdin.readline
n = int(input())
graph = {}
for _ in range(n - 1):
    x, y = map(int, input().strip().split())
    if x in graph:
        graph[x].append(y)
    else:
        graph[x] = [y]
    if y in graph:
        graph[y].append(x)
    else:
        graph[y] = [x]
table = [0] * (n + 1)
visited = [False] * (n + 1)


def dfs(n, graph, table):
    if visited[n]:
        return
    visited[n] = True
    for x in graph[n]:
        if table[x] > 0:
            continue
        table[x] = n
        dfs(x, graph, table)


dfs(1, graph, table)
for x in table[2:]:
    print(x)
