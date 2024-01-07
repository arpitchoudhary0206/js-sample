let s = "test"
// console.log(s.length);

const num = 400
console.log(num.toFixed(2)); // After decimal how many numbers to consider

console.log(num.toPrecision(2)); // Fixed point notatino with a specified number of digits, i.e. converts the number to a given digits if number is larger it will convert it into exponential form

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Converts the number into specified locale 10,00,000 
// console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // generate always between 0,1 inclusive
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 to 20