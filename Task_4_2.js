const score = Number(prompt("Please enter your score", ""));

if ((score >= 0) && (score <= 49))
{
    alert("Unsatisfied!");
}
else if ((score >= 50) && (score <= 70))
{
    alert("Satisfied!");
}
else if ((score >= 71) && (score <= 87))
{
    alert("Good!");
}
else if ((score >= 88) && (score <= 100))
{
    alert("Excellent!");
}
else
{
    alert("Incorrect Assessment!");
}