var evalRPN = function(tokens) {
    const operations = new Set(['+','-','*','/']);
    let carry = NaN;
    for (let i = 0; i < tokens.length; i++) {
        if(operations.has(tokens[i])){
            if(tokens[i] === '+') carry = +tokens[i - 2] + +tokens[i - 1];
            else if(tokens[i] === '*') carry = +tokens[i - 2] * +tokens[i - 1];
            else if(tokens[i] === '-') carry = +tokens[i - 2] - +tokens[i - 1];
            else if(tokens[i] === '/') carry = Math.trunc(+tokens[i - 2] / +tokens[i - 1]);
            tokens.splice(i - 2, 3, carry)
            i-=3
        } else continue;
    }
    return tokens[0];
};