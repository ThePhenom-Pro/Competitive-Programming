var kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => {
        let na = BigInt(a), nb = BigInt(b);
        if (na > nb) return 1;
        else if (na < nb) return -1;
        else return 0
    });
    console.log(nums);
    let index = nums.length - k;
    return nums[index];
};