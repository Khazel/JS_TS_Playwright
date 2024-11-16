const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];

function countCars(input) {
    const uniqueCars = new Map([]);
    for (let i = 0; i < input.length; i++){
        if (uniqueCars.has(input[i])) {
            uniqueCars.set(input[i], uniqueCars.get(input[i]) + 1);
        }
        else {
            uniqueCars.set(input[i], 1);
        }
    }
    return uniqueCars;
}

console.log(countCars(cars));