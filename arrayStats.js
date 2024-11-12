const arrayStats = (inputArray) => {
  const sum = inputArray.reduce((a, b) => a + b, 0);
  const average = sum / inputArray.length;
  const min = Math.min(...inputArray);
  const max = Math.max(...inputArray);
  return { sum: sum, average: average, minimum: min, maximum: max };
};
