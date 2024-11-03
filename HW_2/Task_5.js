function checkID(input)
{
    if (input === "" || input === null || input === undefined)
    {
        throw new TypeError("The field is empty! Please enter your ID.");
    }
    else if (isNaN(Number(input)))
    {
        throw new TypeError("You have entered not a numeric value! Please enter your ID.");
    }
    else if (input < 1 || input > 1000)
    {
        throw new RangeError("Please enter value in between 1 and 1000! Please enter your ID.");
    }
    else
    {
        return "You have entered a valid ID.";
    }
}

while(true)
{
    try
    {
        const userInput = prompt("Please enter your ID in between 1 and 1000", "");
        const message = checkID(userInput);
        alert(message);
        break;
    } catch(exception)
    {
        alert(`${exception.name}\n${exception.message}`);
    }

}