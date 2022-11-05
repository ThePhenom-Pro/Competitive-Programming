var MinStack = function() {
    this.minVal = []
    this.wholeStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.wholeStack.push(val)
    if (this.minVal.length === 0 || val <= this.minVal[this.minVal.length - 1]) this.minVal.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let value = this.wholeStack.pop();
    if(value === this.minVal[this.minVal.length - 1]) this.minVal.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.wholeStack[this.wholeStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal[this.minVal.length - 1]
};
