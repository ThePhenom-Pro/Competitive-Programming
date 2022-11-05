var lengthOfLongestSubstring = function(s) {
  let n = 1;
  let k = 1;
  if (s.length === 0) n = 0;
  else {
    for (let a of s) {
      let b = 1;
      let qwerty = [a];
      for (let i = k; i < s.length; i++) {
        if (!qwerty.includes(s[i])) {
          qwerty.push(s[i]);
          b++;
        } else break;
      }
      n = b > n ? b : n;
      k++;
    }
  }
  return n;
};