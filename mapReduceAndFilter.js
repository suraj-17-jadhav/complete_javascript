// array map method
const names = ['suraj',  'mahesh', 'rahul'  , 'nilesh' , 'nilam' , 'sagar' , 'sumeru'];
names.map((val)=>{
    console.log(val);
    return val.toUpperCase();
})
const num = [12,22,34,53,23,13,424,53,53,24,32];
num.map((val)=>{
    console.log(val + 2) ;
    return val+2;
})
const student = [
    {
        name: 'suraj',
        age: 20,
        marks: 90,
        email: 'surajadhav0149@gmail.com',
        address: {
            street: 'pune',
            city: 'pune',
            state: 'maharashtra',
            pin: 411020
        }
    },
    {
        name: 'nilesh',
        age: 20,
        marks: 90,
        email: 'nilesh0149@gmail.com',
        address: {
            street: 'pune',
            city: 'pune',
            state: 'maharashtra',
            pin: 411020
        }
    },
    {
        name: 'mahesh',
        age: 20,
        marks: 90,
        email: 'mahesh0149@gmail.com',
        address: {
            street: 'pune',
            city: 'pune',
            state: 'maharashtra',
            pin: 411020
        }
    },
    {
        name: 'sagar',
        age: 20,
        marks: 90,
        email: 'sagar0149@gmail.com',
        address: {
            street: 'pune',
            city: 'pune',
            state: 'maharashtra',
            pin: 411020
        }
    }
]
student.map((key , index)=>{
    console.log(key.name , index);
    console.log(key.age , index);
    console.log(key.marks , index);
    console.log(key.email, index);
    console.log(key.address.street , index);
    console.log(key.address.city , index);
})

// array filter method
let names1 = ['suraj' ,'nilesh' , 'sagar' , 'sudarshan' , 'siddheshwar' , 'akashpadampalle' ];
const finalNames = names1.filter((val)=>{
    return val.length > 5;
})
console.log(finalNames);

const adultStudent = student.filter((val) =>{
    return val.age > 18;
}).map((student)=>{
    return student.name
}).filter((student)=>{
    return student.includes('s')
})
console.log(adultStudent)


// array reduce method
let sum = [1,2,3,4,5].reduce((acc,cur)=>{
    return acc + cur;
},0)
// acc means => accumulator and tells from where to start.
// cur means => current and tells the current value.
console.log(sum);   //output is 15;

// array find method
let find = student.find((val)=>{
    return val.age > 18;
})
console.log(find);
//output is { name: 'sagar', age: 20, marks: 90, email: 'sagar0149@gmail.com', address: { street: 'pune', city: 'pune', state: 'maharashtra', pin:411020}};


// array findIndex method
let findIndex = student.findIndex((val)=>{
    return val.age > 18;
})
console.log(findIndex);
//output is 0;  it will return the index of the output

// array sort method
let arr = [12,23,32,12,34,53,62];
arr.sort((a,b)=>{
    return a-b;
})
console.log(arr);

// array reverse method
let arr1 = [12,23,32,12,34,53,62];
arr1.reverse();
console.log(arr1);

// aray concat method
let arr2 = [12,23,32,12,34,53,62];
let arr3 = [12,23,32,12,34,53,62];
let arr4 = arr2.concat(arr3);
console.log(arr4);

// array join method
let arr5 = [12,23,32,12,34,53,62];
let arr6 = arr5.join(',');
console.log(arr6);
//output is 12,23,32,12,34,53,62



