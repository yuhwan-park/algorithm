n, val = list(map(int, input().split()))
pennies = [int(input()) for _ in range(n)]
pennies.reverse()

answer = 0
for penny in pennies:
    if val == 0:
        break
    answer += val // penny
    val %= penny

print(answer)
