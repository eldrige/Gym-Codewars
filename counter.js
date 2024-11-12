const createCounter = (initialValue = 0) => {
  let counter = 0;
  return function counterFn() {
    counter++;
    return counter;
  };
};

console.log(createCounter()());
console.log(createCounter()());
console.log(createCounter()());
