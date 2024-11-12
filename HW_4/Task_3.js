class Plane{
    constructor(model, fuelSupply, fuelConsumption) {
        this._model = model;
        this._fuelSupply = fuelSupply;
        this._fuelConsumption = fuelConsumption;
    }

    calcFlightRange() {
        let flightRange = this._fuelSupply / this._fuelConsumption * 100;
        return flightRange;
    }

    static sortFlightRange(planesArray) {
        planesArray.sort((planeA, planeB) => {
            return planeA.calcFlightRange() - planeB.calcFlightRange();
        });

        planesArray.forEach((plane) => {
            console.log(`${plane.model}: ${plane.calcFlightRange()}`);
        });
    }
}

class TransportPlane extends Plane{
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this._cargo = cargo;
        this._addTank = addTank;
    }

    calcFlightRange() {
        let flightRange = (this._fuelSupply + this._addTank) / this._fuelConsumption * 100;
        return flightRange;
    }
}

class PassengerPlane extends Plane{
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this._passengers = passengers;
        this._refueling = refueling;
    }

    calcFlightRange() {
        let flightRange = (this._fuelSupply + this._refueling) / this._fuelConsumption * 100;
        return flightRange;
    }
}

class WarPlane extends Plane{
    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
        super(model, fuelSupply, fuelConsumption);
        this._missiles = missiles;
        this._aerodynamicsKoef = aerodynamicsKoef;
    }

    calcFlightRange() {
        let flightRange = ((this._fuelSupply / this._fuelConsumption) * this._aerodynamicsKoef) * 100;
        return flightRange;
    }
}

console.log("Unsorted range of planes:");

const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log("An-225 Mriya: ", plane1.calcFlightRange());

const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log("Boeing-747: ", plane2.calcFlightRange());

const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
console.log("F-22 Raptor: ", plane3.calcFlightRange());

console.log("Sorted range of planes:");

const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);