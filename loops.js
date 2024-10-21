// for loop in javascript
const arr = [12,23,45,32,45,67];
for(let i= 0; i<arr.length ; i++){
    console.log(arr[i]);
}
// code to print the number between 1-100;
for(let i=1 ; i<=100 ; i++){
    console.log(i); 
}

// while loop in javascript
const names = ["suraj" , "mahesh" , "arun" , "bhushan" , "ankit" , "siddhu" , "sunil"];
let i =0; 
while(i < names.length){
    console.log(` ${names[i]} is stand at position ${i}`);
    i++;
}
// code to print the number between 1-100;
let j =1;
while(j <= 100){
    console.log(j);
    j++;
}

// do while loop in javascript
const fruits = ["mango" , "banana", "apple" , "orange" , "watermelon"]; 
let k =0;
do{
   console.log(fruits[k]);
   k++;
}while( k <fruits.length);
//code to print the number between 1-100
let l =1;
do{
    console.log(l);
    l++;
}while(l <= 100);  // do while loop will execute at least once whether the condition true or false does't matter.

// break and continue in javascript
const numbers = [1,2,3,4,5,6,7,8];
for(let i=0 ; i<numbers.length ; i++){
    if(numbers[i] === 5){
        break;
    }
    console.log(numbers[i]);
}

const digits = [2,4,3,6,8,10];
for(let i=0 ; i<digits.length ; i++){
    if(digits[i] % 2 != 0){
        continue;
    }
    console.log(digits[i]);
}

