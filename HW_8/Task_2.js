function processData(param) {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else if (typeof param === "number") {
        return param * param;
    }
    else if (typeof param === "boolean") {
        return param ? false : true;
    }
    else if (Array.isArray(param) && param.every(function (elemen) { return typeof elemen === "number"; })) {
        if (param.length === 0) {
            return "Empty array: []";
        }
        else {
            param.forEach(function (value, index, array) {
                array[index] = value * value;
            });
            return param;
        }
    }
}
;
console.log(processData("text data"));
console.log(processData(3));
console.log(processData(false));
console.log(processData([1, 2, 3, 4]));
console.log(processData([]));
