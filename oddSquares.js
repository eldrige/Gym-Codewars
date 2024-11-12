const oddSquares = (inputArray) => {
  return inputArray.filter((num) => num % 2 !== 0).map((num) => num * num);
};
