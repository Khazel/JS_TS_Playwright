function display(param1: string): void;
function display(param1: string, param2: string): void;
function display(param1: string[]): void;

function display(param1: string | string[], param2?: string): void {
    if (param2) {
        console.log(param1);
        console.log(param2);
    }
    else if (Array.isArray(param1) && param1.every(element => typeof element === "string")) {
        for(let element in param1) {
            console.log(param1[element]);
        }
    }
    else{
        console.log(param1);
    }
};

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);