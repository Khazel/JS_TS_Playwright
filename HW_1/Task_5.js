for(let count = 1; count <= 50; count++)
{
    if ((count % 2 == 0) && (count % 4 == 0))
    {
        console.log(`${count} is multiple of 2 and 4!`);
    }
    else if (count % 2 === 0)
    {
        console.log(`${count} is multiple of 2!`);
    }
    else if (count % 4 === 0)
    {
        console.log(`${count} is multiple of 4!`)
    }
    else
    {
        console.log(count);
    }
}