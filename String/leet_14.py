from typing import List
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1: return strs[0]
        answer = ""
        stop = False
        for i in range(len(strs[0])):
            if stop: break
            answer += strs[0][i]
            for string in strs:
                prefix = string[:i+1]
                if prefix == answer:
                    continue
                else:
                    answer = answer[:-1]
                    stop = True
                    break
        return answer
    

print(Solution.longestCommonPrefix(Solution, ["dog","racecar","car"]))
