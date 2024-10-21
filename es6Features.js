function add(a,b){
    return a + b;
}       // we are getting output is nan

function add1(a ,b=1){
    return a + b;
}      // we are getting the result is something diff. because now we pass the default parameters for b.

// add1(2);    output is 3
// add1(2,3)   output is 5
// add1(2 , undefined)     output is 3

// spread operator
let arr = [1,2,3,4,5,6];
let arr1 = {...arr};
console.log(arr);
console.log(arr1);
// arr1.push(7);
console.log(arr1);

let student = {
    name : "Rahul",
    age : 20,
    marks : 90
}

let student1 = {...student , college: 'rit islampur'};
console.log(student1) 

// rest operator or rest params 
let multiplyValue = [1,2,3,4,5,6,7,8];
function multiply(...nums){    //here we can use the rest parameter we can collect all the array elements and pass in the form of the array
    console.log(nums)
    let mul = 1;
    for(let i=0; i< nums.length ; i++){
        mul =  mul * nums[i];
    }
    return mul;
}
multiply(...multiplyValue);   // here we pass the array value  with the help of the spread operator

let multiplyValue1 = [1,2,3,4,5,6,7,8];
function multiply1(a, b ,...nums){    //here a will contain 1, b will contain 2 , and nums will contin 3,4,5,6,7,8
    console.log(a , b)
    console.log(nums)
    let mul = 1;
    for(let i=0; i< nums.length ; i++){
        mul =  mul * nums[i];
    }
    return mul;
}
multiply1(...multiplyValue1);   // here we pass the array value  with the help of the spread operator
// if we write the b and doest pass any value then it will call as undefined. and array will call as empty array.


// destructuring in javascript
// 1. array destructuring
const price = [134,324,444,542,134,543];
const [a,b,c,d,e,f] = price;
console.log(a,b,c,d,e,f);
const [, , , , pc] = price
console.log(pc)
const{3: num4} = price;
console.log(num4)
function printNumber([a,b,,,e]){
    console.log(a,b, e);
}
printNumber(price);
// 2. object destructuring
const std = {
    name: 'suraj',
    marks: 23,
    address: {
        street: 'pan card club road',
        address1: 'khotkar lane',
        pinCode: 411020
    }
}
// const {name, marks , address } = std;
const {name: username , marks , address } = std;
console.log(username , marks , address);
const {address: {street, address1, pinCode}} = std;
// const {street, address1 , pinCode} = address;
console.log(street , address1 , pinCode);
function studentInfo({name  ,marks , address}){
    console.log(name)
    console.log(marks)
    console.log(address);
}
studentInfo({...std});
