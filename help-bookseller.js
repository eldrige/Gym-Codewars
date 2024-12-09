function stocklist(books, categories) {
  const result = {};

  // Aggregate the quantities for each category
  for (const book of books) {
    const [category, quantity] = [book[0], parseInt(book.split(' ')[1])];
    result[category] = (result[category] || 0) + quantity;
  }

  // Ensure all categories are represented in the result
  for (const category of categories) {
    result[category] = result[category] || 0;
  }

  return Object.keys(result).length ? result : '';
}

console.log(
  stocklist(
    ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B', 'C', 'D']
  )
);
// Expected output: '(A : 0) - (B : 1290) - (C : 515) - (D : 600)'
