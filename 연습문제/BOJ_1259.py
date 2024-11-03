while True:
    n = int(input())
    s = list(str(n))
    if n == 0:
        exit(0)
    reversedList = reversed(s)
    if int("".join(s)) == int("".join(reversedList)):
        print("yes")
    else:
        print("no")
