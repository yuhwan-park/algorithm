import math

a, b, v = map(int, input().split())

answer = (math.ceil((v - a) / (a - b))) + 1
print(answer)
