type Identity = {
    rating: number
};

function identity<T extends Identity> (arg: T[]): number {
    if (arg.length === 0) {
        return 0;
    }

    let ratingsSum: number = 0;
    
    for(const element of arg) {
        ratingsSum += element.rating;
    }
    
    const ratingAverage = ratingsSum / arg.length;
    return ratingAverage;
}

console.log(identity([{name: "Anna", rating: 3}]));
console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}]));