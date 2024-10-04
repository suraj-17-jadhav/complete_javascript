var message = "Hello World!"
console.log(message[0]);   //result is H
console.log(message[3]);   //result is l
console.log(message[6]);   //result is W
console.log(message.length);   //result is 12

console.log(message.charAt(11));  //result is !
console.log(message.toLowerCase);  //result is hello world!
console.log(message.toUpperCase);  //result is HELLO WORLD!

message = "    Hello World!    "
console.log(message.trim());   //result is Hello World!
console.log(message.trimStart());  //result is Hello World!   
console.log(message.trimEnd());   // result is     Hello World!

message = "Hii, I am Suraj"
console.log(message.includes('Hii'));   //result is true
console.log(message.includes('I am'));   //result is true
console.log(message.includes('I am SURAJ'));   //result is false

console.log(message.indexOf('I'));  //result is 5
console.log(message.indexOf('z'));   // result is -1
console.log(message.indexOf('am'));  // result is 7
console.log(message.indexOf('Suraj'));   //result is 10

console.log(message.replace('Hii', 'Hello'));   //result is Hello, I am Suraj
console.log(message.replace('Bye', 'Hello'));  //result is Hii, I am Suraj
console.log(message.replace('a' , 'A'));     //result is  Hii, I Am Suraj
console.log(message.replaceAll('a' , 'A'));   //result is Hii, I Am SurAj

var temp = 'I am 22 years old'
console.log(message.concat('. ',temp));  //result is Hii, I am Suraj. I am 22 years old

var lastFourDigits = '1992'
console.log(lastFourDigits.padStart(19, '*'));   //result is ***************1432
console.log(lastFourDigits.padEnd(19, '*'));    //result is  1432***************

message = "Hii, I am Suraj"
console.log(message.charCodeAt(2));    //result is 105
console.log(message.charCodeAt(7));   //result is 97

console.log(message.split());   //result is ['Hii, I am Suraj']
console.log(message.split(' '));   //result is (4) ['Hii,', 'I', 'am', 'Suraj']
console.log(message.split('a'));    //result is (3) ['Hii, I ', 'm Sur', 'j']

const concatenatedString= `Last four digit of my account number is `.concat(lastFourDigits)
console.log(concatenatedString);
const templateString = `My account number is ${lastFourDigits.padStart(18 , '*')}`
console.log(templateString);
