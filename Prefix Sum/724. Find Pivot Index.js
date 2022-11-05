var pivotIndex = function(nums) {
    let leftSum = 0, totalSum;
    totalSum = nums.reduce((a, b) => a + b, 0)
    for (let i = 0; i < nums.length; i++) {
        if(leftSum * 2 === totalSum - nums[i]) return i;
        leftSum+=nums[i];
    }
    return -1;
};
