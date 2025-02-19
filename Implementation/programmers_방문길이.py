def solution(dirs):
    dir_map = {
        "U": ([0, 1], "D"),
        "D": ([0, -1], "U"),
        "R": ([1, 0], "L"),
        "L": ([-1, 0], "R"),
    }
    m = [
        [{"U": False, "D": False, "L": False, "R": False} for _ in range(11)]
        for _ in range(11)
    ]
    answer = 0
    x, y = (5, 5)
    for dir in dirs:
        [dx, dy], opposite = dir_map[dir]
        nx, ny = x + dx, y + dy
        if -1 < nx < 11 and -1 < ny < 11:
            if not m[x][y][dir] and not m[nx][ny][opposite]:
                answer += 1
                m[x][y][dir] = True
                m[nx][ny][opposite] = True
            x = nx
            y = ny
    return answer
