var numOfSubarrays = function(arr, k, threshold) {
    let num = 0;
    let ave;
    for (let i = 0; i < arr.length - k + 1; i++) {
      ave = 0;
      for (let j = i; j < i+k; j++) {
          ave += arr[j];
      }
      ave = ave / k;
      if (ave >= threshold) num++;
    }
    return num;
  };