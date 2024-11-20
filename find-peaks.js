function findPeaks(inputArray) {
  const max = Math.max(...inputArray);
  return max;
}

console.log(findPeaks([1, 3, 2, 1, 4, 3, 5, 1, 3, 5])); // 3
