function reverseLongWords(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    })
    .join(' ');
}
