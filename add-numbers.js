function add(x) {
  // Accumulator function
  function accumulator(y) {
    // If no argument, return current sum
    if (y === undefined) {
      return x;
    }
    // Otherwise, continue the chain
    return add(x + y);
  }

  // Make function behave like a number
  accumulator.valueOf = () => x;

  return accumulator;
}

console.log(add(1)(2)(3)(4)(5).valueOf()); // 15
