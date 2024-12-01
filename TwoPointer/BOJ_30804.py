n = int(input())
arr = list(map(int, input().split()))
max_length = 0
left = 0
fruit_count = {}
for right in range(n):
    fruit_count[arr[right]] = fruit_count.get(arr[right], 0) + 1

    while len(fruit_count) > 2:
        fruit_count[arr[left]] -= 1
        if fruit_count[arr[left]] == 0:
            del fruit_count[arr[left]]
        left += 1

    max_length = max(max_length, right - left + 1)
print(max_length)
