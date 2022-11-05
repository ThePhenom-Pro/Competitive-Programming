var productExceptSelf = function(nums) {
    let stack = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) stack.push(product), product *= nums[i];
    product = 1;
    for (let i = nums.length - 1; i >=0; i--) stack[i] *=product, product *= nums[i];
    return stack;
};
