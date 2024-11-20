function commonDenominator(inputArray) {
  const denominators = inputArray.map((element) => {
    const [, denominator] = element;
    return denominator;
  });

  const denominatorProduct = denominators.reduce((acc, curr) => acc * curr, 1);
  const minumumDenominator = Math.min(...denominators);
  let leastCommonDenominator;
  for (let i = minumumDenominator; i < denominatorProduct; i++) {
    if (denominators.every((element) => i % element === 0)) {
      leastCommonDenominator = i;
      break;
    }
  }

  const output = inputArray.map((element) => {
    const [, denominator] = element;
    return [leastCommonDenominator / denominator, leastCommonDenominator];
  });

  return output.map((pair) => `(${pair[0]},${pair[1]})`).join('');
}

console.log(
  commonDenominator([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
