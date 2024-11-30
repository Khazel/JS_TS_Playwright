function removeSpaces(text) {
    const regExp = /^\s*(\w+(\s+\w+)*)\s*$/;

    const formattedText = regExp.exec(text);
    return formattedText[1];
}

console.log(removeSpaces(' textWithSpaces '));
console.log(removeSpaces(' more text with spaces '));