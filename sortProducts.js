const sortProducts = (productArray) => {
  return productArray.sort(
    (productA, productB) => productA.price + productB.price
  );
};

const products = [
  {
    name: 'Laptop',
    price: 1000,
  },
  {
    name: 'Mobile',
    price: 500,
  },
  {
    name: 'Headphone',
    price: 100,
  },
];

console.log(sortProducts(products));
