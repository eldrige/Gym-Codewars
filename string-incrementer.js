function incrementString(inputString) {
  const lastChar = inputString[inputString.length - 1];
  let lastCharType = isNaN(parseInt(lastChar)) ? 'string' : 'number';
  if (lastCharType === 'number') {
    return (
      inputString.slice(0, inputString.length - 1) + (parseInt(lastChar) + 1)
    );
  } else {
    return inputString + '1';
  }
}
