function calculateTotalPrice(product, quantity) {
  let price;
  switch (product) {
    case 'A':
      price = 10;
    case 'B':
      price = 20;
    case 'C':
      price = 30;
    default:
      price = 40;
  }
  return price * quantity;
}

let totalPrice = calculateTotalPrice('B', 2);
console.log(`The total price is ${totalPrice}`);
