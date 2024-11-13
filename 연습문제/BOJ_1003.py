n = int(input())
hash = {0: (1, 0), 1: (0, 1)}
cache = [0, 1, 1, 2] + ([0] * 50)


def fibonacci(n, cache, hash, base):
    if n == 0:
        return 0
    if n == 1:
        return 1
    if not base in hash:
        hash[base] = (hash[n - 1][0] + hash[n - 2][0], hash[n - 1][1] + hash[n - 2][1])
    if n > 0 and cache[n - 1] != 0 and cache[n - 2] != 0:
        return cache[n - 1] + cache[n - 2]
    else:
        cache[n - 1] = fibonacci(n - 1, cache, hash, base)
        cache[n - 2] = fibonacci(n - 2, cache, hash, base)
        return cache[n - 1] + cache[n - 2]


for i in range(41):
    fibonacci(i, cache, hash, i)

for _ in range(n):
    m = int(input())
    zero, one = hash[m]
    print(f"{zero} {one}")
