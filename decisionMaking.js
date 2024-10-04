// if statement 
let name = prompt("enter your name") || 'suraj';
let age  = +prompt("enter your age") || 23;
console.log(name);
console.log(age);
if((age < 18) && (age > 8)){
    console.log(`${name} is school student`);
}
if((age >= 18) && (age <= 22)){
    console.log(`${name} is college student`);
}
if((age > 22) && (age<=50)){
    console.log(`${name} is working professional`);
}
if((age > 50)){
    console.log(`${name} is retired from everything`);
}

// if-else statement
if(name == 'suraj'){
    console.log(`${name} is ${age} years old`);
}else{
    console.log(`${name} is unknown user`);
}

// else-if statement
if((age < 18) && (age > 8)){
    console.log(`${name} is school student`);
}
else if((age >= 18) && (age <= 22)){
    console.log(`${name} is college student`);
}
else if((age > 22) && (age<=50)){
    console.log(`${name} is working professional`);
}
else if((age > 50)){
    console.log(`${name} is retired from everything`);
}else{
    console.log(`enter the valid age`);
}

// switch statement
switch (age) {
    case 1:
        if((age < 18) && (age > 8)){
            console.log(`${name} is school student`);
        }
    break;
    case 2:
        if((age >= 18) && (age <= 22)){
            console.log(`${name} is college student`);
        }
    break;
    case 3:
        if((age > 22) && (age<=50)){
            console.log(`${name} is working professional`);
        }
    break;
    case 4:
        if((age > 50)){
            console.log(`${name} is retired from everything`);
        }
    break;
    default:
        console.log(`enter the valid age`);
    break;
}

// ternary operator
(age > 18 )? console.log(`${name} is college student`) :  console.log(`${name} is school student`);

