import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline


def find_parent(x):
    if parent[x] != x:
        parent[x] = find_parent(parent[x])
    return parent[x]


def union(a, b):
    a = find_parent(a)
    b = find_parent(b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


n, m = map(int, input().split())
parent = [i for i in range(n + 1)]
for _ in range(m):
    t, n, m = map(int, input().strip().split())
    if t == 0:
        union(n, m)
    else:
        if find_parent(n) == find_parent(m):
            print("YES")
        else:
            print("NO")
    print(parent)
