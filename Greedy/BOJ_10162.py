n = int(input())

secs = [300, 60, 10]
answer = [0] * 3
if n == 0:
    print(0)
else:
    for i in range(len(secs)):
        answer[i] = n // secs[i]
        n %= secs[i]
    if n != 0:
        print(-1)
    else:
        print(*answer)
