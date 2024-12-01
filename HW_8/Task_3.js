function getFigureInfo(figure) {
    switch (figure.type) {
        case "triangle":
            var base = figure.base, triangleHeight = figure.height;
            return "Triangle with base ".concat(base, " and height ").concat(triangleHeight, " has an area of ").concat((base * triangleHeight) / 2);
        case "rectangle":
            var width = figure.width, rectangleHeight = figure.height;
            return "Rectangle with width ".concat(width, " and height ").concat(rectangleHeight, " has an area of ").concat(width * rectangleHeight);
        case "circle":
            var radius = figure.radius;
            return "Circle with radius ".concat(radius, " has an area of ").concat((Math.PI * Math.pow(radius, 2)).toFixed(2));
        default:
            return "Please enter a valid figure type";
    }
}
;
var triangle = { type: "triangle", base: 5, height: 10 };
var rectangle = { type: "rectangle", width: 8, height: 14 };
var circle = { type: "circle", radius: 8 };
console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));
