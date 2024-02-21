n, m = list(map(int, input().split(" ")))
arr = [tuple(input().split(" ")) for _ in range(m)]

minP = min([int(item[0]) for item in arr])
minI = min([int(item[1]) for item in arr])

if minP > minI * 6:
    print(minI * n)
else:
    answer = minP * (n // 6)
    n -= 6 * (n // 6)
    if minP > minI * n:
        answer += minI * n
    else:
        answer += minP
    print(answer)
