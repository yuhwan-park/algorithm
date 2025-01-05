n, m = map(int, input().split())
chicken_coords = []
house_coords = []
for i in range(n):
    coords = list(map(int, input().split()))
    for j in range(n):
        if coords[j] == 1:
            house_coords.append((i + 1, j + 1))
        elif coords[j] == 2:
            chicken_coords.append((i + 1, j + 1))
count = float("inf")


def dfs(chickens, index, max):
    global count
    if len(chickens) == max:
        distance = 0
        for house_x, house_y in house_coords:
            temp = float("inf")
            for chicken_x, chicken_y in chickens:
                temp = min(temp, abs(house_x - chicken_x) + abs(house_y - chicken_y))
            distance += temp
        count = min(count, distance)
        return

    for i in range(index, len(chicken_coords)):
        x, y = chicken_coords[i]
        chickens.append((x, y))
        dfs(chickens, i + 1, max)
        chickens.pop()


for i in range(1, m + 1):
    dfs([], 0, i)

print(count)
