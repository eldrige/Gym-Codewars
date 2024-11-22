const meanSquareError = (arrayA, arrayB) => {
  const arraylength = arrayA.length;
  let differenceArray = [];
  if (arrayA.length !== arrayB.length) {
    throw new Error('Arrays must have the same length');
  }

  arrayA.forEach((value, index) => {
    differenceArray.push(value - arrayB[index]);
  });

  return (
    differenceArray
      .map((value) => value * value)
      .reduce((acc, value) => acc + value, 0) / arraylength
  );
};

console.log(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2])); // [0, 0, 0]
