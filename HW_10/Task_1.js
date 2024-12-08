function display(param1, param2) {
    if (param2) {
        console.log(param1);
        console.log(param2);
    }
    else if (Array.isArray(param1) && param1.every(function (element) { return typeof element === "string"; })) {
        for (var element in param1) {
            console.log(param1[element]);
        }
    }
    else {
        console.log(param1);
    }
}
;
display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
