const inputValue = prompt("Please enter your number", "");
const hours = Math.floor(inputValue / 60);
const wholeHoursInMinutes = hours * 60;
const minutes = inputValue - wholeHoursInMinutes;
let result = ``;

if ((minutes >= 0) && (minutes < 10))
{
    result = `${hours}:0${minutes}`;
}
else
{
    result = `${hours}:${minutes}`;
}

alert(result);