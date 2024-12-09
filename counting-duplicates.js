function duplicateCount(s) {
  s = s.toLowerCase();

  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let repeatedCount = 0;
  for (let count of Object.values(charCount)) {
    if (count > 1) {
      repeatedCount++;
    }
  }

  return repeatedCount;
}

console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
