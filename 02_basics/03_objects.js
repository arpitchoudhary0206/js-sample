// If object created using constructor it will be singleton
//Object.create()

// To use this symbol in object we need to []
const mySym = Symbol("key1")

// Object literals
const JsUser = {
    name : "Arpit",
    age : 18,
    [mySym]: "mykey1",
    email : "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

// console.log(JsUser.email)
// In the above syntax if key containes spaces this won't work so we wil use below method to access the object key values

// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// To access the symbol again we need to use []
// console.log(JsUser[mySym])

// Change the object
JsUser.email = "hitesh@chatgpt.com"

// Freeze the object so that it won't change
// Object.freeze(JsUser)

// Below syntax won't give any error but object will not get changed
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// We can pass function as a value in JS
JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting())

// this reference current object
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    return this.name
}

// JsUser.greetingTwo()
const test = JsUser.greetingTwo()
console.log(test);

// Here console.log return undefined too after hello user print since this function will return null if we return something it won't give null