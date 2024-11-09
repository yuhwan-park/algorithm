n, m = map(int, input().split())
board = [list(input()) for _ in range(n)]
answer = 99999999

for p in range(n - 7):
    for k in range(m - 7):
        b = list(map(lambda x: x[k:], board))[p:]
        for target, opposite in [("W", "B"), ("B", "W")]:
            cnt = 0
            for i in range(8):
                for j in range(8):
                    if i % 2 == 0:
                        if j % 2 == 0 and b[i][j] == opposite:
                            cnt += 1
                        elif j % 2 == 1 and b[i][j] == target:
                            cnt += 1
                    else:
                        if j % 2 == 0 and b[i][j] == target:
                            cnt += 1
                        elif j % 2 == 1 and b[i][j] == opposite:
                            cnt += 1
            answer = min(answer, cnt)

print(answer)
