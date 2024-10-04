const studentName = ['suraj', 'rutik', 'mahesh', 'nilesh', 'bhushan', 'yogesh'];
console.log(studentName);
console.log(studentName[0]);
studentName[studentName.length] = 'athrva'
// adding elements in an array
studentName.push('gaurav');
console.log(studentName);
// removing the element in an array
studentName.pop('rutik')
console.log(studentName);
// we can store the key value pair in array 
const newarray = []
console.log(newarray.firstName = 'sumit');   

// array methods
const marks = [98, 67, 78, 92, 88]
console.log(marks.length);
console.log(marks.push(85));  //push method will add the element from the last
console.log(marks);

console.log(marks.pop());    //pop method will remove the last element in an array
console.log(marks); 

console.log(marks.shift());   //shift method is reverse to pop. it will remove the element from the start. first element will remove if we use the shift method
console.log(marks);

console.log(marks.unshift(23));   //unshift method is reverse to push. it will add the element from the start 
console.log(marks);

const student = ['suraj', 'mahesh', 'nilesh', 'Rutik', 'ankit' , 'akash'];

console.log(marks.concat(student));   //[23, 67, 78, 92, 88, 'suraj', 'mahesh', 'nilesh', 'rutik', 'ankit', 'akash']
console.log(student.concat(marks));   // ['suraj', 'mahesh', 'nilesh', 'rutik', 'ankit', 'akash', 23, 67, 78, 92, 88]

console.log(marks.indexOf(78));    //indexOf method will give the index of that array elements  (2)
console.log(marks.indexOf(90));   //if the array element is not present in that array then it will give the index -1
console.log(student.indexOf('suraj'));   //it will give the index of that element in an array (0)

console.log(marks.includes(67));  //includes wil give the true or false value as output. it wil check that element is present in an array or not
console.log(student.includes('rohit'));  //it will give the output false

console.log(marks.reverse());   //reverse method will reverse the array
console.log(student.reverse());   //reverse the student array elements

console.log(marks.sort());   //sort array method will sort the array elements.
console.log(student.sort());   //sort the string element on the basis of ascii code value. first capital leeteers then small letters


// slice and splice array method
console.log(marks);            //[23, 67, 78, 88, 92]
console.log(marks.slice(2));    //[78, 88, 92]   it will give the new array from starting index to last index if you only mention the first index
console.log(marks.slice(2,4));   // [78, 88]     it will give the new array with start index to last index but it will exclude the last index.
console.log(marks.slice('' ,1 ));   //[67]  if the first index is not mentioned then it will generate the new array from the last element
console.log(marks);  //[23, 67, 78, 88, 92]  slice method  will not modify the original array

console.log(marks.splice(0 , 1));  //[23]     it will remove the element from the mention start index and it will remove the n number of elements from the starting index
console.log(marks);        // [67, 78, 88, 92]    it will modify the original array

// Multidimensional Arrays
const nameAndMarksList = [
    ['suraj' , 98],
    ['ankit', 98],
    ['akash', 98]
]
console.log(nameAndMarksList);
const TicTacToe = [
    ['X' , null , null],
    [null , null , 'O'],
    ['O' , null , 'X']
]
console.log(TicTacToe);