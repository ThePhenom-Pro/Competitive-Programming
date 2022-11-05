var sortColors = function(nums) {
    let start = 0, current = 0, end = nums.length - 1, temp;
    while (current <= end) {
        if(nums[current] === 0){
            temp = nums[current];
            nums[current++] = nums[start]
            nums[start++] = temp;
        } else if(nums[current] === 2) {
            temp = nums[current];
            nums[current] = nums[end]
            nums[end--] = temp;
        } else current++;
    }
}