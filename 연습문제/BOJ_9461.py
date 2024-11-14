n = int(input())
arr = [1, 1, 1, 2, 2] + [0] * 96

for i in range(5, 101):
    arr[i] = arr[i - 1] + arr[i - 5]

for _ in range(n):
    m = int(input())
    print(arr[m - 1])
