let inputValue = prompt("Please enter your number", "");
let hours = Math.floor(inputValue / 60);
let wholeHoursInMinutes = hours * 60;
let minutes = inputValue - wholeHoursInMinutes;
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