/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    let ans = [];
    for (let i = 0, j = n; i < n ; i++, j++) {
        ans.push(nums[i]);
        ans.push(nums[j]);
    }
    return ans;
}
