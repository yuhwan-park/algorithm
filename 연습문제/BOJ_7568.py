n = int(input())
answer = []
arr = [tuple(map(int, input().split())) for _ in range(n)]

for x, y in arr:
    cnt = 1
    for p, q in arr:
        if x == p and y == q:
            continue
        if x < p and y < q:
            cnt += 1
    answer.append(str(cnt))

print(" ".join(answer))
