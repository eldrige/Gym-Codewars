const myMap = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

console.log(myMap([1, 2, 3, 4], (num) => num * num)); // [1, 4, 9, 16]
console.log(myMap([1, 2, 3, 4], (num) => num + 10)); // [11, 12, 13, 14]

const myFilter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(myFilter([1, 2, 3, 4], (num) => num % 2 === 0)); // [2, 4]
console.log(myFilter([1, 2, 3, 4], (num) => num % 2 !== 0)); // [1, 3]

const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  return arr;
};
