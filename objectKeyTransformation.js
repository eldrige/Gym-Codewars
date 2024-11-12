const objectKeyTransfer = (entryObject, transformFunc) => {
  // null --> zero
  // undefined --> empty string

  const convertedObject = {};
  console.log(Object.entries(entryObject));
  for (const [key, value] of Object.entries(entryObject)) {
    const upperCaseKey = key.toUpperCase();
    convertedObject[upperCaseKey] = value;
  }

  return convertedObject;
};

console.log(
  objectKeyTransfer({
    name: 'Anjeline',
    lastName: 'Awino',
    age: 25,
    isBlind: true,
  })
);
