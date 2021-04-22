/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    let ans = [];
    nums.reduce((accum, value) => {
        ans.push(accum + value);
        return accum + value;
    },0);
    return ans;
};
