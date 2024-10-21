function print(b){
    console.log(typeof b);
    console.log(b);
}

console.log(print(123)) ;
console.log( print("suraj"));
console.log(print(true)) ;
console.log(print({name: "suraj", age: 22}));
console.log(print([23,34,42,13]));


// higher oder function

function callMe(b){
    console.dir(b)
    b()
}

function b(){
    console.log("hello");
}

callMe(b);