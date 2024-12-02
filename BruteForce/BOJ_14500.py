import sys

input = sys.stdin.readline
n, m = map(int, input().split())
arr = [list(map(int, input().strip().split())) for _ in range(n)]
answer = 0
ver_block_minos = [
    (0, 1, 2, 5),
    (2, 3, 4, 5),
    (0, 3, 4, 5),
    (0, 1, 2, 3),
    (0, 1, 4, 5),
    (1, 2, 3, 4),
    (1, 3, 4, 5),
    (0, 1, 2, 4),
]
hor_block_minos = [
    (0, 1, 3, 4),
    (1, 2, 4, 5),
    (0, 1, 2, 3),
    (0, 1, 2, 5),
    (2, 3, 4, 5),
    (0, 3, 4, 5),
    (0, 1, 4, 5),
    (1, 2, 3, 4),
    (0, 1, 2, 4),
    (1, 3, 4, 5),
]

for i in range(m - 1):
    for j in range(n - 2):
        block = [
            arr[j][i],
            arr[j + 1][i],
            arr[j + 2][i],
            arr[j][i + 1],
            arr[j + 1][i + 1],
            arr[j + 2][i + 1],
        ]
        for n1, n2, n3, n4 in ver_block_minos:
            answer = max(answer, block[n1] + block[n2] + block[n3] + block[n4])

for i in range(m - 2):
    for j in range(n - 1):
        block = [
            arr[j][i],
            arr[j][i + 1],
            arr[j][i + 2],
            arr[j + 1][i],
            arr[j + 1][i + 1],
            arr[j + 1][i + 2],
        ]
        for n1, n2, n3, n4 in hor_block_minos:
            answer = max(answer, block[n1] + block[n2] + block[n3] + block[n4])

for i in range(m - 3):
    for j in range(n):
        block = [
            arr[j][i],
            arr[j][i + 1],
            arr[j][i + 2],
            arr[j][i + 3],
        ]
        answer = max(answer, sum(block))

for i in range(m):
    for j in range(n - 3):
        block = [
            arr[j][i],
            arr[j + 1][i],
            arr[j + 2][i],
            arr[j + 3][i],
        ]
        answer = max(answer, sum(block))

print(answer)
