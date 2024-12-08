import sys

input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().strip().split())) for _ in range(n)]
dp = [[(0, "R"), (0, "G"), (0, "B")]] * n
dp[0] = [(arr[0][0], "R"), (arr[0][1], "G"), (arr[0][2], "B")]
for i in range(1, n):
    R, G, B = dp[i - 1]
    for j in range(3):
        min_value = float("inf")
        cur_color = "R" if j == 0 else "G" if j == 1 else "B"
        for n, color in [R, G, B]:
            if cur_color == color:
                continue
            k = arr[i][j] + n
            min_value = min(min_value, k)
        dp[i][j] = (min_value, cur_color)

print(min(dp[-1])[0])
