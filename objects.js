const user = {
    firstName: 'Arjun',
    lastName: 'Patil',
    age: 22,
    college: 'RIT Islampur, Sangali',
    passout: 2024
}
console.log(user);

const user2 = {
    firstName: 'Mahesh',
    'last-Name': "Patil"
}
console.log(user2["last-Name"]);
console.log(user2.firstName);
console.log(user2['first'+'Name']);

const student = {
    name: 'Sumeru Chougule',
    age: 22,
    address: {
        details:{
           buildingNo : 1,
           buildingName: 'Bhatiya Ediface',
           floor: '3rd floor',
           flatNo: 10
        },
        city: 'Ichalkaraji', 
        Dist: 'Kolhapur',
        state: 'Maharashtra',
        country: 'India', 
        pincode: 422334
    },
    mobileNumber:{
        countryCode: '+91', 
        MobileNumber: '9878987675'
    },
    dateOfBirth: 21/4/2002,
    collegeName: 'Rit Islampur'
}
student.marks = '8.24 CGPA'
student['is-passout'] = true
delete student.age
console.log(student);

Object.seal(student);   //no add, no delete, but can modify property.
Object.freeze(student);  //no edit, no add, no delete

console.log('middleName' in student);   //result is false
console.log('mobileNumber' in student);   //result is true
