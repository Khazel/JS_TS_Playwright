const element = prompt("Please enter the element you are looking for", "");

const array = [1, 2, 3, 4, "Alex", 10, "Nick"];

function findElem(arr, el)
{
    const result = Boolean(arr.find(elements => elements == el));
    return result;
}

alert(findElem(array, element));