let score="33"
console.log(typeof score);
console.log(typeof(score));

let valInNumber = Number(score) // while using type conversion we use
console.log(valInNumber);

score="33abc"
valInNumber = Number(score) // It will convert it into Nan (Not a number)
console.log(valInNumber);

score = null
valInNumber = Number(score) // It will convert it into 0
console.log(valInNumber);

score = undefined
valInNumber = Number(score) // It will convert it into Nan (Not a number)
console.log(valInNumber);

score = true
valInNumber = Number(score) // It will convert it into 1
console.log(valInNumber);

/*
33          =>  33
"33"        =>  Nan
true        =>  1
null        =>  0
undefined   =>  NaN
*/


// In case of boolena conversion
let loggedIn = 1
console.log(Boolean(loggedIn)); //  true

/*
1                   => true
""                  => false
"someContent"       => true
*/ 


// Operations
console.log(1 + 2);
console.log(1 + "2");
console.log("1" + 2);
console.log( "1" + 2 + 2);  // Considered first values 122
console.log( 1 + 2 + "2");  // 32