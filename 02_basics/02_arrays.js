const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// Output -> ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);

// Use spread operator -> all the elements spreads
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Check whether it is array or not
console.log(Array.isArray("Hitesh"))

// Convert to array
console.log(Array.from("Hitesh"))


console.log(Array.from({name: "hitesh"})) // interesting
// It will give [] since it does not know to which it needs to make an array key or value just like below example

console.log(Array.from(Object.values({name: "hitesh"})))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
