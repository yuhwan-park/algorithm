import math

n, m = map(int, input().split())


def is_prime_number(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n) + 1)):
        if n % i == 0:
            return False
    return True


for i in range(n, m + 1):
    if is_prime_number(i):
        print(i)
