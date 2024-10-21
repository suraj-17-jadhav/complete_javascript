const arr = [12,23,43,13,44,64,34];
// for-of loop we can use over tyhe iterble object like array , sting , map
for(let num of arr){
    console.log(num);
}
// object os not the iterable object so we need to use the for in loop
const student = {
    name: 'John',
    age: 25,
    marks: 90,
    address:{
      flat_number: 23,
      street: 'abc',
      city: 'xyz',
      pin: 234532
    }
}
// for in loop
for(let key in student){
    console.log(student[key]);
}
// we can use the for of loop over the object but for this we need to create into the array
const studentKeys = Object.keys.student;
const studentValues = Object.values.student;
const studentEntries = Object.entries.student;
// now we can use the for of loop   
for(let key of studentKeys){
    console.log(student[key]);
}

// foreach loop in javascript
// we can use the foreach loop over the array
const arr1 = [12,23,43,13,44,64,34];
arr1.forEach((num) => {
    console.log(num);
});
arr.forEach(function(num){
    console.log(num)
})
// we can use the foreach loop over the object but for this we need to create into the array
const student1 = {
    name: 'John',
    age: 25,
    marks: 90,
    address:{
        flat_number: 23,
        street: 'abc',
        city: 'xyz',
        pin: 234532
    }
}
const studentKeys1 = Object.keys(student1);
const studentValues1 = Object.values(student1);
const studentEntries1 = Object.entries(student1);
// now we can use the foreach loop
studentKeys1.forEach((key) => {
    console.log(student1[key]);
});
