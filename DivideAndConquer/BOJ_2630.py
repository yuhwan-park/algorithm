import sys

input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().strip().split())) for _ in range(n)]
zero, one = 0, 0


def divide(x, y, n):
    global zero, one
    if n == 1:
        if arr[x][y] == 0:
            zero += 1
        else:
            one += 1
        return
    z, o = 0, 0
    blocked = False
    for i in range(x, x + n):
        for j in range(y, y + n):
            if arr[i][j] == 0:
                z += 1
            else:
                o += 1
            if z > 0 and o > 0:
                blocked = True
                divide(x, y, n // 2)
                divide(x + n // 2, y, n // 2)
                divide(x, y + n // 2, n // 2)
                divide(x + n // 2, y + n // 2, n // 2)
                break
        if blocked:
            break
    if not blocked:
        if z > 0:
            zero += 1
        else:
            one += 1


divide(0, 0, n)
print(zero)
print(one)
