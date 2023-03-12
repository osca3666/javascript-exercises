const add = function(numOne,numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne,numTwo) {
  return numOne - numTwo;
};

const sum = function(numArr) {
  let suma = numArr.reduce((total,currVal) => total + currVal,0);
  return suma;
};

const multiply = function(Arr) {
  let product = 1;
  for (let num of Arr){
    product = product * num;
  }
  return product;
};

const power = function(numOne, numTwo) {
	let answer = numOne ** numTwo;
  return answer;
};

const factorial = function(num) {
	let factorialAnswer = 1;
  for (i = 1; i <= num;i++){
    factorialAnswer *= i;
  }
  return factorialAnswer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
