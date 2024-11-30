function findCapitalWords(sentence) {
    const regExp = /\b[A-Z][a-z]*\b/g;
    const result = sentence.match(regExp);
    return result;
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));