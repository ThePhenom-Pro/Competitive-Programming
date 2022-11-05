var MyQueue = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue1.push(x);
    return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let e = this.peek();
    this.queue2.pop();
    return e;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.queue2.length === 0) {
        while (this.queue1.length !== 0) {
            let e = this.queue1.pop()
            this.queue2.push(e);
        }
    }

    return this.queue2[this.queue2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.queue1.length + this.queue2.length) === 0
};
