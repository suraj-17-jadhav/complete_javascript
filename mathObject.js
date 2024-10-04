// mathematical operator in javascript
// 1. additional operator
console.log(1+4);   //5
// subtraction operator
console.log(23 -34);   //-11
// multiplication operator
console.log(23 * 12);   //276
// division operator
console.log(12/4);   //3
// module/reminder operator
console.log(23 % 8);     //7
// exponentiation operator
console.log(4 ** 4);   //256

// Math object
console.log(Math);  //Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
console.log(Math.PI);   //3.141592653589793
console.log(Math.LN10);   //2.302585092994046

// Math.sqrt method
console.log(Math.sqrt(16));    //result is 4
console.log(Math.sqrt(234));    //15.297058540778355

// Math.pow() method
console.log(Math.pow( 2 , 6));  // 64

// Math.floor method
console.log(Math.floor(6.999987899808909869));   // 6
console.log(Math.floor(-3.909878999890));    // -4

// Math.ceil method
console.log(Math.ceil(9.90988999890));     // 10
console.log(Math.ceil(-5.9899909890));     // -5

//Math.round method
console.log(Math.round(8.987678909));    // 9
console.log(Math.round(4.675678));   // 5
console.log(Math.round(-56.7679890978));   // -57 
console.log(Math.round(-7.324323));    // -7

//Math.random method
console.log(Math.random());  // 0.710532146512086
console.log(Math.random());      //0.9764604088495796
console.log(Math.random());   //0.5273026991207372
console.log(Math.random() * 20);   //17.6567899879877654
console.log(Math.ceil(Math.random() * 20));  // 9
console.log(Math.ceil(Math.random() * 20));     // 17
console.log(Math.floor(Math.random() * 1000000));    //975657        we can use this to generate the otp

//Understand Infinity and NaN in JavaScript
console.log(8 / 0);    //Infinity
console.log(-7 / 0);    //-Infinity
console.log(typeof Infinity);    //Number
console.log(0 / 0);   //NaN
console.log(typeof NaN);    //Number
