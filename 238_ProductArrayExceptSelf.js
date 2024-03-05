/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = nums.slice(), right = nums.slice();
    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i]
    }

    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i]
    }

    const ans = [right[1]];
     for(let i = 1; i < nums.length - 1; i++) {
        ans.push(left[i - 1] * right[i + 1]);
    }
    ans.push(left[nums.length - 2])

    return ans;
};