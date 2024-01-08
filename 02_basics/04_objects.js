// Singleton object creation way
// const tinderUser = new Object()
// Non singletone object creation (literal way)
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "arpit",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// This will give same issue as the Arrays, ie. object will not be flatten

// Object.assign(target, sources....)

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// or use spread operator just like below
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// To access the above first user
users[1].email


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// Key values pairs in [], [], [] format
// console.log(Object.entries(tinderUser));

// To check whether key present or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "sample js",
    price: "999",
    courseInstructor: "arpit"
}

// course.courseInstructor

// Object destructuring
// We can reduce the above syntax and can use it anywhere in the code
const {courseInstructor: instructor} = course

console.log(instructor);
