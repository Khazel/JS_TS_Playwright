const elementToDelete = Number(prompt("Please enter the element you want to delete", ""));

let array = [3, 12, 16, 19, 21, 33];

function deleteItem(arr, item)
{
    return newArray = arr.filter(element => element !== item);
}

alert(deleteItem(array, elementToDelete));