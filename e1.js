function calculateSum(num1, num2) {
  return num1 + num2;
}

let total = calculateSum(10, 20);
console.log(`The total is ${total}`);

if (total > 30) {
  console.log("The total is greater than 30");
} else (total < 30) {
  console.log("The total is less than 30");
}
