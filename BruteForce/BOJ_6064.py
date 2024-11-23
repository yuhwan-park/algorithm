import math

case = int(input())
for _ in range(case):
    M, N, x, y = map(int, input().split())
    count = 0
    i = x
    while i <= math.lcm(M, N):
        if (i - y) % N == 0:
            count = i
            break
        i += M
    print(-1 if count == 0 else count)
