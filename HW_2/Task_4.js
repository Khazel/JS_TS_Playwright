function getCircleLenght(r)
{
    const error = new TypeError("Incorrect radius - please enter numeric value!");

    if (isNaN(Number(r)) || Number(r) <= 0)
    {
        throw error;
    }
    const circumference = 2 * Math.PI * r;
    return circumference
}

while(true)
{
    try
    {
        const userInput = prompt("Please enter circle radius", "");
        const outputValue = getCircleLenght(userInput);
        alert(`Circle circumference is ${outputValue}.`);
        break;
    } catch (exception)
    {
        alert(exception.message);
    }
}