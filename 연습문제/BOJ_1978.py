n = int(input())
arr = list(map(int, input().split()))


def is_prime2(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


answer = 0

for num in arr:
    if is_prime2(num):
        answer += 1
print(answer)
