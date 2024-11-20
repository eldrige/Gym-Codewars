function findUniq(inputArr) {
  const counts = {};
  for (item of inputArr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return Object.keys(counts).find((key) => counts[key] === 1);
}

console.log(findUniq([3, 10, 3, 3, 3]));
