function createPhoneNumber(numbers) {
  let stringified = numbers.join('');
  return `(${stringified.slice(0, 3)}) ${stringified.slice(
    3,
    6
  )}-${stringified.slice(6, 10)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
