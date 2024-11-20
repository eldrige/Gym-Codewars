function moveZeros(input) {
  let zeros = input.filter((num) => num === 0);
  let nonZeros = input.filter((num) => num !== 0);
  return nonZeros.concat(zeros);
}
