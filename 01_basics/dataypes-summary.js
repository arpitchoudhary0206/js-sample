// Data types categorized in two ways.
/*
How does the data gets stored in memory and get access based on that data types categorized in two ways - 
Primitive and No primitive (reference types)

//Primitive (7 types) (Call by Values - data gets copied not the refernce)
String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type
Array, Objects, Functions
 

*/

// Js static or dynamic typed language
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n       It we place n at the end it will considered as BigInt

// Symbol makes them unique even though you passed the same value

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);  // Object function

// https://262.ecma-international.org/5.1/#sec-11.4.3