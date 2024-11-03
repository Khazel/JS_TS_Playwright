const array1 = [5, 10, 20];
const array2 = [0, 10, 20, 30];
let array3 = [];

for (i = array1.length - 1; i >= 0; i--)
{
    for (j = array2.length - 1; j >= 0; j--)
    {
        if (array1[i] != array2[j]) continue;
        
        array1.splice(i, 1);
        array2.splice(j, 1);
    }
}

array3 = array1.concat(array2);

console.log(array3);