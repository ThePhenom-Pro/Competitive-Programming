var reverseParentheses = function(s) {
    let stack = [];
    for(let char of s){
        if (char !== ')') {
            stack.push(char);
            continue;
        }
        let lastElement = stack.pop();
        let queue = []
        while (lastElement !== '(') {
            queue.push(lastElement);
            lastElement = stack.pop();
        }
        while (queue.length) stack.push(queue.shift());
        console.log(stack);
    }
    return stack.join('')
};