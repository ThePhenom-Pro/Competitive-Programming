var chalkReplacer = function(chalk, k) {
    let i = 0;
    while (k>=0) {
        if (k < chalk[i] && i!==chalk.length) return i;
        k = k - chalk[i];
        i<chalk.length-1 ? i++ : i = 0;
    }
    return 0
};
