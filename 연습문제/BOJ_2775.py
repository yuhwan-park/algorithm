table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]] + [
    ([0] * 15) for _ in range(15)
]
for i in range(1, 16):
    for j in range(0, 15):
        table[i][j] = sum(table[i - 1][: j + 1])

n = int(input())
for _ in range(n):
    floor = int(input())
    room_num = int(input())
    print(table[floor][room_num])
