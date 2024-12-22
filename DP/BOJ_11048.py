n, m = map(int, input().split())
table = [list(map(int, input().split())) for _ in range(n)]
dp = [[0] * m for _ in range(n)]
dp[0][0] = table[0][0]
for i in range(n):
    for j in range(m):
        if i + 1 < n:
            dp[i + 1][j] = max(
                table[i + 1][j], table[i + 1][j] + dp[i][j], dp[i + 1][j]
            )
        if j + 1 < m:
            dp[i][j + 1] = max(
                table[i][j + 1], table[i][j + 1] + dp[i][j], dp[i][j + 1]
            )
        if i + 1 < n and j + 1 < m:
            dp[i + 1][j + 1] = max(
                table[i + 1][j + 1], table[i + 1][j + 1] + dp[i][j], dp[i + 1][j + 1]
            )
print(dp[n - 1][m - 1])
