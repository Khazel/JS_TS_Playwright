let x = 1;
let y = 2;

const res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

const res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

const res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

const res4 = x + y + undefined;
console.log(res4);
console.log(typeof res4);