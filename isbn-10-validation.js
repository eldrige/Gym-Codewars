function validISB10(isbn) {
  if (!/^\d{9}[\dX]$/.test(isbn)) return false;

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum = sum + (i + 1) * parseInt(isbn[i], 10);
  }

  const lastChar = isbn[9];
  sum = sum + lastChar === 'X' ? 10 * 10 : 10 * parseInt(lastChar, 10);

  return sum % 11 === 0;
}
