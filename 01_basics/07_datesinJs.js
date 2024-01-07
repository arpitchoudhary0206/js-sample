// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // Object

// let myCreatedDate = new Date(2023, 0, 23).  // month range 0-11
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// Timestamps used in polls, where whoever gives first answer
let myTimeStamp = Date.now()

// By default timestamp is in milliseconds
// console.log(myTimeStamp);

// Convert date to milliseconds to compare it with timestamp
// console.log(myCreatedDate.getTime());   

// Milliseconds to seconds and to remove decimal val add floor()
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // Month starts from 0
console.log(newDate.getDay());  // Sun=0, Mon=1

// String interpolation
// `${newDate.getDay()} and the time `

// Customize date formats
newDate.toLocaleString('default', {
    weekday: "long",
})

let myCreatedDate1 = new Date(2023, 13, 23) 
// console.log(myCreatedDate1); // it will add months (here in above example, months ranges from 0-11 so extra 2 months gets added after 2023-12-23 and return) => 2024-02-23