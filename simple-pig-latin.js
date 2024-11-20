function pigIt(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      if (word.match(/[^a-zA-Z]/)) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
