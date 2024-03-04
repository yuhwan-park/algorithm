n = int(input())
cnt = 0
while n > 0 and n % 5 != 0:
    cnt += 1
    n -= 2
cnt += n // 5
n %= 5
print(-1 if n > 0 else cnt)
