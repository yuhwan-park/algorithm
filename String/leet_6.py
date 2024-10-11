class Solution:
    def convert(self, s: str, numRows: int) -> str:
        rows = [[] for _ in range(numRows + 1)]
        isUp = False
        index = 1
        if numRows == 1:
            return s
        for string in s:
            rows[index].append(string)
            if isUp:
                index -= 1
                if index < 1:
                    isUp = False
                    index = 2
            else:
                index += 1
                if index > numRows:
                    isUp = True
                    index = numRows - 1
        return ''.join([''.join(row) for row in rows])
