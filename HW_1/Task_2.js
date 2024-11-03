const firstNumber = prompt("Please enter your first number", "");
const secondNumber = prompt("Please enter your second number", "");

const sum = Number(firstNumber) + Number(secondNumber);
let diff = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

if (diff < 0)
{
    diff *= -1;
}

alert(`Sum is ${sum}, difference is ${diff}, product is ${product}, quotient is ${quotient}.`);