var minSubArrayLen = function(target, nums) {
    let ans = Number.MAX_SAFE_INTEGER, sum = 0, comp = 0;
    for(let i = 0, j = 0; i<nums.length;){
        if (sum<target) sum += nums[i], i++, comp++;
        while(sum>=target){
            ans = Math.min(ans, comp);
            comp--;
            sum -=nums[j];
            j++;
        }
    }
    return (ans > nums.length) ? 0 : ans;
};
