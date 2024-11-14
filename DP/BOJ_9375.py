import sys

t = int(sys.stdin.readline())
for _ in range(t):
    dict = {}
    n = int(sys.stdin.readline())
    for _ in range(n):
        name, category = sys.stdin.readline().split()
        if category in dict:
            dict[category] += 1
        else:
            dict[category] = 1
    result = 1
    for count in dict.values():
        result *= count + 1
    result -= 1

    print(result)
