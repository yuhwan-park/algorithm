str = input()

if str.count("X") % 2 != 0:
    print(-1)
else:
    answer = ""
    cnt = 0
    for x in str:
        if x == "X":
            cnt += 1
        else:
            if cnt % 2 != 0:
                print(-1)
                break
            if cnt > 0:
                answer += "AAAA" * (cnt // 4)
                cnt %= 4
                answer += "BB" * (cnt // 2)
                cnt = 0
            answer += "."
    if cnt > 0:
        answer += "AAAA" * (cnt // 4)
        cnt %= 4
        answer += "BB" * (cnt // 2)
        cnt = 0
    if len(answer) == len(str):
        print(answer)
