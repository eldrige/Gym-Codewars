function numOfTrailingZeros(n) {
  //Be careful 1000! has 2568 digits..
  let count = 0;
  while (n % 2 === 0) {
    count++;
    n /= 2;
  }
  return count;
}

console.log(numOfTrailingZeros(12)); // 2
