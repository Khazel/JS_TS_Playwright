let firstNumber = prompt("Please enter your first number", "");
let secondNumber = prompt("Please enter your second number", "");

let sum = Number(firstNumber) + Number(secondNumber);
let diff = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;

if (diff < 0)
{
    diff *= -1;
}

alert(`Sum is ${sum}, difference is ${diff}, product is ${product}, quotient is ${quotient}.`);