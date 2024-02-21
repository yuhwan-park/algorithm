n, m = list(map(int, input().split(" ")))
count = 1
while True:
    if m == n:
        print(count)
        break
    if (m % 10 != 1 and m % 2 != 0) or m < n:
        print(-1)
        break
    if m % 10 == 1:
        m //= 10
        count += 1
    elif m % 2 == 0:
        m /= 2
        count += 1
