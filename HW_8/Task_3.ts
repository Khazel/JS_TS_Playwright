type Triangle = {
    type: "triangle";
    base: number;
    height: number;
};

type Rectangle = {
    type: "rectangle";
    width: number;
    height: number;
};

type Circle = {
    type: "circle";
    radius: number;
};

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
    switch(figure.type) {
        case "triangle":
            const {base, height: triangleHeight} = figure;
            return `Triangle with base ${base} and height ${triangleHeight} has an area of ${(base * triangleHeight) / 2}`;
        case "rectangle":
            const {width, height: rectangleHeight} = figure;
            return `Rectangle with width ${width} and height ${rectangleHeight} has an area of ${width * rectangleHeight}`;
        case "circle":
            const {radius} = figure;
            return `Circle with radius ${radius} has an area of ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`;
        default:
            return "Please enter a valid figure type";
    }
};

const triangle: Triangle = {type: "triangle", base: 5, height: 10};
const rectangle: Rectangle = {type: "rectangle", width: 8, height: 14};
const circle: Circle = {type: "circle", radius: 8};

console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));