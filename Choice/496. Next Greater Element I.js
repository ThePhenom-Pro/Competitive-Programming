var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let index = 0;
    for (let i = 0; i < nums1.length; i++) {
        let compNum = nums1[i];
        let pushedItem = -1;
        for (let j = 0; j < nums2.length; j++) {
            if (compNum === nums2[j]) {
                index = j;
                while (index < nums2.length){
                    if (nums2[index] > compNum) {
                        pushedItem = nums2[index]
                        break;
                    } else index++;
                } 
            }
        }
        stack.push(pushedItem)
    }
    return stack;
};
