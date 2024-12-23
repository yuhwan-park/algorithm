from itertools import combinations

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
answer = float("inf")
for i in range(1, n + 1):
    combination = list(combinations(arr, i))
    value = float("inf")
    for x in combination:
        sour = 1
        salty = 0
        for sour_v, salty_v in x:
            sour *= sour_v
            salty += salty_v
        value = min(value, abs(sour - salty))
    answer = min(answer, value)
print(answer)
