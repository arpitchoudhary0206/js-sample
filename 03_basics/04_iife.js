// Immediately Invoked Function Expressions (IIFE)

// Sometimes we want something to be run as soon as our application starts something like db connection

// We dont' want some global variables to pollute children, so we create a separate scope and gets executed imediately

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Also we need to add semicolumn after iife to tell where to stop the context

// With arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('arpit')