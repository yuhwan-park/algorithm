n = int(input())
table = [False, 0, 1, 1] + [0] * (n)


def DP(n, table):
    if n < 4:
        return table[n]

    for i in range(4, n + 1):
        arr = []
        if i % 3 == 0:
            arr.append(table[i // 3] + 1)
        if i % 2 == 0:
            arr.append(table[i // 2] + 1)
        arr.append(table[i - 1] + 1)
        table[i] = min(arr)
    return table[n]


print(DP(n, table))
