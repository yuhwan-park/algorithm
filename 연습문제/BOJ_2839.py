n = int(input())
if n == 5 or n == 3:
    print(1)
elif n < 5:
    print(-1)
elif n % 5 == 0:
    print(n // 5)
else:
    answer = []
    cnt = 0
    while n > 5 or n == 3:
        if n % 5 == 0:
            answer.append(n // 5)
        if n % 3 == 0:
            answer.append(cnt + n // 3)
        n -= 5
        cnt += 1

    if len(answer) == 0:
        print(-1)
    else:
        print(min(answer))
