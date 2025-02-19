from collections import Counter


def solution(topping):
    c = Counter(topping)
    a_list = set()
    b_list = set(c.keys())
    answer = 0

    for i in range(len(topping) - 1):
        t = topping[i]
        a_list.add(t)
        c[t] -= 1
        if c[t] == 0:
            b_list.remove(t)
        if len(a_list) == len(b_list):
            answer += 1
    return answer
