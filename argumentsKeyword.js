function arr(a,b){
    console.log(arguments);
    return a+b;
}

function add(){
    var sum = 0;
    for(let i=0; i<arguments.length ; i++){
        sum += arguments[i];
    }
    return sum;
}
add(2,3,4,5,6,7,8,9,1);


const addition = function(){
    let sum = 0;
    for(let i=0; i<arguments.length ; i++){
        sum += arguments[i];
    }
    return sum;
}
addition(2,3,4,5,6,7,8,9,1);

const sum = () => {
    let sum = 0;
    for(let i=0; i<arguments.length ; i++){
        sum += arguments[i];
    }
    return sum;
}
sum(2,3,4,5,6,7,8,9,1);      // in arrow function arguments keyword is not supported. for this we use the rest parameters.

const summation = (...val) => {
    let sum = 0;
    for(let i=0; i<val.length ; i++){
        sum += val[i];
    }
    return sum;
}
summation(2,3,4,5,6,7,8,9,1);