arr = []
for i in range(0, 3000000):
    if "666" in str(i):
        arr.append(i)

print(arr[int(input()) - 1])
