from itertools import combinations

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
players = [i for i in range(n)]
coms = combinations(players, n // 2)
answer = float("inf")
for com in coms:
    start = 0
    link = 0
    other_team = []
    for x in players:
        if not x in com:
            other_team.append(x)
    for x, y in combinations(com, 2):
        start += arr[x][y] + arr[y][x]
    for x, y in combinations(other_team, 2):
        link += arr[x][y] + arr[y][x]
    answer = min(answer, abs(start - link))
print(answer)
