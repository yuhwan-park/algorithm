# DP 인데 BFS로 풀어버렸네..

import sys, copy
from collections import deque

input = sys.stdin.readline
n = int(input())
tree = [list(map(int, input().strip().split())) for _ in range(n)]
visited = [[False] * (i + 1) for i in range(n)]
table = copy.deepcopy(tree)
q = deque([(0, 0, 0)])
while q:
    i, j, m = q.popleft()
    if i >= n - 1 or j > n:
        continue
    if visited[i][j]:
        continue
    visited[i][j] = True
    table[i + 1][j] = max(table[i + 1][j], tree[i + 1][j] + table[i][j])
    table[i + 1][j + 1] = max(table[i + 1][j + 1], tree[i + 1][j + 1] + table[i][j])
    if m <= n - 1:
        q.append((i + 1, j, m + 1))
        q.append((i + 1, j + 1, m + 1))

print(max(table[-1]))
