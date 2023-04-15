let result = 0;
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  setTimeout(function() {
    result += numbers[i];
  }, 1000);
}

setTimeout(function() {
  console.log(`The result is ${result}`);
}, 2000);
