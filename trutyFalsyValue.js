// IN numbers 0 and NaN is false 
// rest all the numbers are true doesn't matter positive and negative

console.log(Boolean(NaN));   //false
console.log(Boolean(undefined))   //false
console.log(Boolean(0));    //false
console.log(Boolean(false));   //false
console.log(Boolean(''));   //false
console.log(Boolean(null));   //false
console.log(Boolean(``));   //false

console.log(Boolean(1));   //true
console.log(Boolean(Infinity));    //true
console.log(Boolean(-Infinity));   //true
console.log(Boolean(-23));   //true
console.log(Boolean(23));   //true
console.log(Boolean(12.3456098598572));   //true
console.log(Boolean(0.3456098598572));   //true
console.log(Boolean('suraj'));    //true
console.log(Boolean(`SURAJ`));   //false
console.log(Boolean(true));    //true