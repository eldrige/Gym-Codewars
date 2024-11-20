function isPangram(sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sentenceLower = sentence.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (sentenceLower.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}
