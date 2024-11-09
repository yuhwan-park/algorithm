import sys

input = sys.stdin.readline
n = int(input())
arr = [tuple(input().strip().split()) for _ in range(n)]
arr.sort(key=lambda x: (int(x[1]), int(x[0])))
print("\n".join(map(lambda x: f"{x[0]} {x[1]}", arr)))
