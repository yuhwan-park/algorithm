import sys

input = sys.stdin.readline
n, m, b = map(int, input().split())
arr = [list(map(int, input().strip().split())) for _ in range(n)]
flat = sum(arr, [])
hash = {}
desc_arr = sorted(set(flat), reverse=True)

for x in flat:
    hash[x] = hash.get(x, 0) + 1

answer = []
for top in range(min(desc_arr), max(desc_arr) + 1):
    second = 0
    inventory = b
    list_ = sorted(hash.items(), key=lambda x: (x[0], x[1]), reverse=True)
    stop = False
    for x, y in list_:
        if x > top:
            second += 2 * ((x - top) * y)
            inventory += (x - top) * y
    for x, y in list_:
        if x < top:
            if inventory < y:
                stop = True
                break
            inventory -= (top - x) * y
            second += (top - x) * y

    if not stop and inventory >= 0:
        answer.append((second, top))

answer.sort(key=lambda x: (x[0], -x[1]))
print(f"{answer[0][0]} {answer[0][1]}")
