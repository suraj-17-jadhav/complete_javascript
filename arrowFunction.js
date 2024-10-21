// function definition

// function expression
const add = function(num1 , num2){
    return num1+num2;
}
console.log(add(2,3)) ;

// function declaration
function sub(num1, num2){
    return num1-num2;
}
console.log(sub(34 ,16));

// arrow function
const mul = (num1 , num2) =>{
    return num1*num2;
}
console.log(mul(12,21));

const random = () => {
    return Math.floor(Math.random() * 10);
}
console.log(random());

setTimeout(()=>{
    console.log("hii..")
}, 3000);