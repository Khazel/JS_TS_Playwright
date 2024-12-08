function identity(arg) {
    if (arg.length === 0) {
        return 0;
    }
    var ratingsSum = 0;
    for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
        var element = arg_1[_i];
        ratingsSum += element.rating;
    }
    var ratingAverage = ratingsSum / arg.length;
    return ratingAverage;
}
console.log(identity([{ name: "Anna", rating: 3 }]));
console.log(identity([{ title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 }]));
