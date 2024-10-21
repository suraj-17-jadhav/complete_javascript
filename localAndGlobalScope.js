let a =25;
var a2 = 23 ;
const r=34;
console.log(a);
console.log(a2);
console.log(r);

function sum(){
    let num1 = 12;
    let num2 =34;
    let sum = num1 + num2;
    console.log(sum);
}

sum();

console.log(num1);   //can not access outside the block;
console.log(num2);   //can not access outside the block;
console.log(sum);    //can access outside the block;

// let const are block scoped variables;
// var are function scoped variables;
// var can be accessed outside the block;
// let const can not be accessed outside the block;
// let const are hoisted but not initialized;
// var are hoisted and initialized with undefined;

function add(num1 , num2){
    let sum = num1 + num2;
    console.log(num1 + num2) ;
    function saySum(){
        console.log("the sum is: "+sum);   // here sum is closure
    }
}


add(12,23);
