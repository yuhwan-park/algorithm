import itertools

n, k = map(int, input().split())
m = itertools.combinations([i for i in range(n)], k)
print(len(list(m)))
