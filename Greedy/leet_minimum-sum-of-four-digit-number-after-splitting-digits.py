class Solution:
    def minimumSum(self, num: int) -> int:
        nums = sorted(list(map(lambda x: int(x), str(num))))
        # nums = sorted(str(nums)) 도 됨.. 문자열인 숫자도 소팅할 때 숫자로 취급해서 소팅되는줄 몰랐네..
        num1 = str(nums[0]) + str(nums[2])
        num2 = str(nums[1]) + str(nums[3])
        return int(num1) + int(num2)

    # return int(a[0] + a[2]) + int(a[1] + a[3]) 형변환 2번으로 가능.
