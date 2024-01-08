// Earlier we used to have only one engine which is browser to run any js code, but nowdays we took out that engine and created somehting called node/deno/bun.

// So in browser, this object is window object but in node this is {}

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()    // => object got changed

// console.log(this);    // => {}


/// ---------------
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      // => this only works with objects but not with the functions
// }

// chai()   // => undefined

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()   // => undefined


// ---------------------------------------------

const chai = () => {
    let username = "hitesh"
    console.log(this);
}


// chai()   // Even this is also undefined

// ---------------------------------------------

// Arrow function 
() => {}

// We can stored arrow function in any var also
// const addTwo = (num1, num2) => {
//     return num1 + num2       // Explicit return
// }

// Below implementation known as Implicit return where we don't use {}
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

// So basically whenever we use {} we need return keyword in arrow function

// this is how object can be passed
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
