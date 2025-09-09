const square = function (num) {
  return num * num;
};
console.log(square(3));

const mathOperations = [
  function add(x, y) {
    return x + y;
  },
  function subtract(x, y) {
    return x - y;
  },
  function multiply(x, y) {
    return x * y;
  },
  function divide(x, y) {
    return x / y;
  },
];

console.log(mathOperations[2](5,2))

function calculator(a,b, operation){
    return operation(a,b);
}

console.log(calculator(6,7, mathOperations[2] ))