var moveZeroes = function(nums) {
    let zeroIndices = []
    nums.filter((e, i) => {
        if(e === 0) zeroIndices.push(i);
        return e === 0;
    })
    for (let i = zeroIndices.length - 1; i > -1; i--) {
        nums.splice(zeroIndices[i], 1);
        nums.push(0);
    }
    return nums;
};
