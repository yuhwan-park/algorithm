import sys

input = sys.stdin.readline
n, m = map(int, input().split())
table = [list(map(int, input().strip().split())) for _ in range(n)]
dp = [[0] * n for _ in range(n)]
dp[0][0] = table[0][0]
for i in range(n):
    for j in range(n):
        if i == 0 and j == 0:
            continue
        if j == 0:
            dp[i][j] += dp[i - 1][n - 1] + table[i][j]
        else:
            dp[i][j] += dp[i][j - 1] + table[i][j]
for _ in range(m):
    x1, y1, x2, y2 = map(lambda x: int(x) - 1, input().strip().split())
    if x1 == x2 and y1 == y2:
        print(table[x1][y1])
    else:
        answer = 0
        for i in range(x1, x2 + 1):
            answer += dp[i][y2] - dp[i][y1] + table[i][y1]
        print(answer)
