n, m = map(int, input().split())
arr = list(map(int, input().split()))

sum_arr = []
for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        for k in range(j + 1, len(arr)):
            s = arr[i] + arr[j] + arr[k]
            if s <= m:
                sum_arr.append(s)
sum_arr.sort(key=lambda x: abs(m - x))
print(sum_arr[0])
