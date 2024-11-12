const nullConverter = (entryObject) => {
  // null --> zero
  // undefined --> empty string

  const convertedObject = {};
  console.log(Object.entries(entryObject));
  for (const [key, value] of Object.entries(entryObject)) {
    if (value === null) {
      convertedObject[key] = 0;
    } else if (value === undefined) {
      convertedObject[key] = '';
    } else {
      convertedObject[key] = value;
    }
  }

  return convertedObject;
};

console.log(nullConverter({ x: 5, y: null, z: undefined, a: 10 })); // { x: 5, y: 0, z: '', a: 10 }
