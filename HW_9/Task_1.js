function superSort(arr, direction) {
    var newArray = [];
    if (direction === "asc") {
        newArray = arr.sort();
    }
    else if (direction === "desc") {
        newArray = arr.sort(function (a, b) { return b.localeCompare(a); });
    }
    return newArray;
}
;
var names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
var func = superSort;
var result = func(["A", "C", "D", "B"], "desc");
console.log(result);
