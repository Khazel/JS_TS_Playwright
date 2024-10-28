let userInput = Number(prompt("Please enter your number", ""));

let isItPrime = true;

// if (userInput <= 1) isItPrime = false;
// if (userInput <= 3) isItPrime = true;

// if (userInput % 2 == 0 || userInput % 3 == 0) isItPrime = false;

// for (let i = 5; i * i <= userInput; i += 6)
// {
//     if (userInput % i === 0 || userInput % (i + 2) === 0) isItPrime = false;
// }

for (let i = 2, s = Math.sqrt(userInput); i <= s; i++)
{
    if (userInput % i === 0) isItPrime = false;
}

if (isItPrime == false)
{
    alert(`${userInput} is not a prime number.`)
}
else
{
    alert(`${userInput} is a prime number`)
}