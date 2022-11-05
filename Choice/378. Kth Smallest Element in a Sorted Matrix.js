var kthSmallest = function(matrix, k) {
    let stack = [];
    for(let i=0; i< matrix.length;i++){
        for(let j=0; j<matrix[0].length;j++) stack.push(matrix[i][j]);
    }
    stack.sort((a, b) => a - b);
    return stack[k - 1]
};
