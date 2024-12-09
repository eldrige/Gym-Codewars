function toCamelCase(input) {
  return input
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}

console.log(toCamelCase('hello-world')); // helloWorld
console.log(toCamelCase('The_Stealth-Warrior'));
