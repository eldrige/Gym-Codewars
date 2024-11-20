function count(string) {
  const output = {};
  for (const char of string) {
    if (!output[char]) {
      output[char] = 1;
    } else {
      output[char]++;
    }
  }
  return string === '' ? {} : output;
}

console.log(count('hello world'));
