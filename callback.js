function Display(result) {
  console.log(result);
}

function Calculator(num1, num2, Callback) {
  let sum = num1 + num2;
  Callback(sum);
}

Calculator(5, 5, Display);