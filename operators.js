// Comparison Operators in JavaScript
// 1. == equal to   #it does the implicit(Automatic) conversion to compare
let user1age = 24;
let user2age = 32;
console.log(user1age == user2age);     // False
user1age = '24'; 
console.log(user1age == user2age);   // False
user1age = '32';
console.log(user1age == user2age);   // True

// 2. === strict equality    #equal value and equal type   #you have to do explicit(manual) conversion to compare
user1age = '32'
user2age = 32
console.log(+user1age === user2age);    //true

// 3. != not equal 
user1age = 32
user2age = 32 
console.log(user1age != user2age);    //false
user2age = 42
console.log(user1age != user2age);    //true
user2age = '32'
console.log(user1age != user2age);   //false

// 4. !== not equal value or not equal type(strict)
user1age = '32'
user2age = 32
console.log(user1age !== user2age);    //true

// 5. > greater than
user1age = 42
user2age = 32
console.log(user1age > user2age);  //true

// 6. < less than
user1age = 42
user2age = 32
console.log(user1age < user2age);  //false

// 7.>= greater than or equal to
user1age = 42
user2age = 32
console.log(user1age >= user2age);  //true

// 8. <= less than or equal to
user1age = 42
user2age = 32
console.log(user1age <= user2age);  //false

// Logical operators in javascript
// 1. &&  and operator
console.log((4 > 5) && (6 > 2))   //false
console.log((2 < 4) && (5 > 2))    //true
console.log((null) && 'suraj');   //null
console.log(0 && 3+5);   //0
console.log('suraj' && undefined);  //undefined
console.log('object1' && 'object2');    //object2
console.log('hello' && console.log('hello'));   //undefined
// 2. || or operator
console.log((4 > 5) || (6 > 2))   //true
console.log((2 < 4) || (5 > 2))    //true
console.log((null) || 'suraj');   //suraj
console.log(0 || 3+5);   //8
console.log('suraj' || undefined);  //suraj
console.log('object1' || 'object2');    //object1
console.log(undefined || console.log('hello'));   //undefined
// 3. ! not operator
console.log(!(null));   //true
console.log(!true);    //false

