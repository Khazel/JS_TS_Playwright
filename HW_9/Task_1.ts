type Direction = "asc" | "desc";
type NumberArray = string[];
type SortFunction = typeof superSort;

function superSort(arr: NumberArray, direction: Direction): NumberArray {
    let newArray: NumberArray = [];
    if (direction === "asc") {
        newArray = arr.sort();
    }
    else if (direction === "desc") {
        newArray = arr.sort((a, b) => b.localeCompare(a));
    }
    return newArray;
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);