n = int(input())
arr = [ord(x) - 96 for x in list(input())]

answer = 0
for i, x in enumerate(arr):
    answer += x * (31**i)

print(answer % 1234567891)
