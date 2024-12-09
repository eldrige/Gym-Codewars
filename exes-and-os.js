function XO(str) {
  //   if (str.split('').some((val) => val !== 'x' && val !== 'o')) return true;
  return (
    str
      .toLowerCase()
      .split('')
      .filter((val) => val === 'x').length ===
    str
      .toLowerCase()
      .split('')
      .filter((val) => val === 'o').length
  );
}

console.log(XO('xxxm'));
console.log(XO('xxOo'));
