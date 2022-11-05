var maxScore = function (cardPoints, k) {
  let sum = 0, best;
  for (let i = 0; i < k; i++) sum += cardPoints[i];
  best = sum;
  for (let i = k - 1, j = cardPoints.length - 1; ~i; i--, j--) {
    sum += cardPoints[j] - cardPoints[i];
    best = sum > best ? sum : best;
  }
  return best;
};