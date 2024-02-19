import sys

input = sys.stdin.readline

N = int(input())

v = 1000 - N
answer = 0
pennies = [500, 100, 50, 10, 5, 1]

for penny in pennies:
    answer += v // penny
    v %= penny

print(answer)
