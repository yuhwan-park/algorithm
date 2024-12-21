import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split())
graph = [set() for _ in range(n + 1)]
parties = []
truthy = list(map(int, input().strip().split()))[1:]

for party_index in range(m):
    members = list(map(int, input().strip().split()))
    for m1 in members[1:]:
        for m2 in members[1:]:
            if m1 == m2:
                continue
            graph[m1].add(m2)
            graph[m2].add(m1)
    parties.append(members[1:])
q = deque(truthy)
visited = [False] * (n + 1)
while q:
    x = q.popleft()
    if visited[x]:
        continue
    visited[x] = True
    for i in range(m):
        if x in parties[i]:
            parties[i] = []
    for x in list(graph[x]):
        q.append(x)

print(len([party for party in parties if party]))
