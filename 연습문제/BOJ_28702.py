[a, b, c] = [input() for _ in range(3)]


def fizz_buzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0 and n % 5 != 0:
        return "Fizz"
    elif n % 3 != 0 and n % 5 == 0:
        return "Buzz"
    return n


if c.isdigit():
    print(fizz_buzz(int(c) + 1))
else:
    if a.isdigit():
        print(fizz_buzz(int(a) + 3))
    elif b.isdigit():
        print(fizz_buzz(int(b) + 2))
