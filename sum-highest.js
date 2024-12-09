function sumArray(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);

  const uniqueArray = [...new Set(array)].filter(
    (item) => item !== max && item !== min
  );

  return [...uniqueArray].reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([0, 1, 6, 10, 10])); // 16
