var maxVowels = function(s, k) {
    let maxCount = 0
    let vowels = new Set(['a','e','i','o','u'])
    for (let i = 0; i < k; i++) vowels.has(s[i]) && maxCount++;
    for (let i = 0, curr = maxCount; i < s.length - k; i++) {
        if(vowels.has(s[i])) curr--
        if(vowels.has(s[i + k])) ++curr
        maxCount = maxCount>curr ? maxCount: curr;
        console.log(s[i+k]);
    }
    return maxCount;
};