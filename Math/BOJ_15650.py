from itertools import combinations

n, m = map(int, input().split())
arr = list(combinations(range(1, n + 1), m))

for x in arr:
    print(*list(x))
