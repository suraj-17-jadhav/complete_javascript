// by using the let keyword
//let keyword is block scoped variable.
// we can not use the let declared variable in the code. it will give the error

console.log(firstName);
var firstName='Suraj'
let lastName = 'Jadhav'
let age = 22
let isHappy = false
firstName = 'SURAJ'
lastName = 'JADHAV'
let userIntro = `Hii, i am ${firstName} ${lastName}. i am ${age} years old.`
console.log(userIntro);
// when you declare the variable and not assign the value on it then javascript by default assume the type is undefined. it means later on the value may be changes.
let a 
a='arjun'
console.log(typeof a);

// by using the var keyword
// var keyword is having the global scope
// we can use the variable before decalred in code
var name = 'suraj jadahv'
var Age = 22

// by using the const keyword
//when we don't want that our variable should change the value then we used the const keyword.
// const variable is also block scoped variable
//// we can not  use the variable before decalred in code
const PI = 3.14
const Name = 'suraj jadahv'
const AGE = 22
Name = 'SURAJ Jadhav'
console.log(Name);   // at this time we get the error