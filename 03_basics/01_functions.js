
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName is reference and () is the execution of the function
// sayMyName()

// On function definition then it is called parameters
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// On function call it is called arguments
// addTwoNumbers(2,3)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// Below is the rest operator same as spread operator but the use case is diff . whenever we are not sure how many arguments can come we use rest operator to handle such cases and it will return list of items.

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //=> [500,2000]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// We can directly pass an object just like this
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

// Pass an array to a function
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));