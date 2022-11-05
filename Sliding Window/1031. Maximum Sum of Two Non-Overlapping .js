var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const travel = (FN, SN) => {
        let sum = 0;
        for(let i = 0; i< nums.length + 1 - FN - SN; i++){
            let curSum = nums.slice(i, i + FN).reduce((a, b) => a + b, 0);
            let j = i + FN;
            while (j < nums.length - SN + 1) {
                let secSum = nums.slice(j, j + SN).reduce((a, b) => a + b, 0)
                let totalSum = curSum + secSum;
                sum = Math.max(sum, totalSum);
                j++;
            }
        }
        return sum;
    }
    let maxSum = Math.max(travel(firstLen, secondLen), travel(secondLen, firstLen));
    return maxSum;
};