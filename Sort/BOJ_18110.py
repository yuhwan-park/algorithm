import math
import sys

input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort()


def half_round(n):
    return math.floor(n + 0.5)


m = half_round(n * 0.15)
if m > 0:
    arr = arr[m:-m]
if n == 0:
    print(0)
else:
    print(half_round(sum(arr) / len(arr)))
