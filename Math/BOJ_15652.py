from itertools import combinations_with_replacement

n, m = map(int, input().split())
arr = list(combinations_with_replacement(range(1, n + 1), m))
print(arr)
for x in arr:
    print(*list(x))
