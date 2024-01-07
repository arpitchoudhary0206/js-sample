// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(). => Remove last element, it will print too

// myArr.unshift(9) => Insert at first
// myArr.shift()    => Remove first ele, if you print it will print the ele too

// console.log(myArr.includes(9));  // returns boolean
// console.log(myArr.indexOf(3));   // -1 or index num

// const newArr = myArr.join()      // Joins by specified char and converted to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

// slice don't manipulate original array and returns from given to end index exclusive, whereas
// splice manipulates original array and take out the array from given index to end index inclusive
const newArray = [1, 2, 3, 4, 5, 6]
console.log("Original Array ", newArray);
console.log(`Sliced array ${newArray.slice(1, 3)}` )
console.log("Array after slice ", newArray);

console.log(`Spliced array ${newArray.splice(1, 3)}` )
console.log("Array after splice ", newArray);
