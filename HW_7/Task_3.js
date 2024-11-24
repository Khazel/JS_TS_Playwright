function getLetterCount(text) {
    const regExp = /[A-Za-z]/g;
    const result = text.match(regExp);
    const output = {};

    for (const char of result) {
        const lowerChar = char.toLowerCase();
        if (lowerChar !== ' ') {
            if (output[lowerChar]) {
                output[lowerChar] += 1;
            }
            else {
                output[lowerChar] = 1;
            }
        }
    }
    return output;
}

console.log(getLetterCount("banana"));
console.log(getLetterCount("The short text"));