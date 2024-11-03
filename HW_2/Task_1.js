const num1 = Number(prompt('Please enter first number', '0'));
const num2 = Number(prompt('Please enter second number', '0'));
const action = prompt('Please enter your action. Available actions are sum, product and square', 'sum');

function sum(x, y)
{
    return x + y;
}

function product(x, y)
{
    return x * y;
}

function square(x, y)
{
    return x ** y;
}

function processData(x = 0, y = 0, action = sum)
{
    const result = action(x, y);
    return result;
}

if (action == 'sum')
{
    alert(`Sum: ${processData(num1, num2, sum)}`);
}
else if (action == 'product')
{
    alert(`Product: ${processData(num1, num2, product)}`);
}
else if (action == 'square')
{
    alert(`Square: ${processData(num1, num2, square)}`);
}