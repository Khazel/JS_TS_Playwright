let score = Number(prompt("Please enter your score", ""));

switch (true) {
    case ((score >= 0) && (score <= 49)):
        alert("Unsatisfied!");
        break;
    case ((score >= 50) && (score <= 70)):
        alert("Satisfied!");
        break;
    case ((score >= 71) && (score <= 87)):
        alert("Good!");
        break;
    case ((score >= 88) && (score <= 100)):
        alert("Excellent!");
        break;
    default:
        alert("Incorrect Assessment!");
}