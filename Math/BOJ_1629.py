# 분할 정복을 이용한 거듭 제곱
a, b, c = map(int, input().split())


def divide_pow(a, b, c):
    if b == 1:
        return a % c
    if b & 1:
        return ((divide_pow(a, b // 2, c) ** 2) * a) % c
    else:
        return (divide_pow(a, b // 2, c) ** 2) % c


print(divide_pow(a, b, c))

pow()
