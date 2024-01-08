{} // this is nothing but a scope. it can be used with if-else or function or any where we see them
// Anything inside {} is a block scope and outside is global scope


//var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 300
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);

// The above var c can be accessible here 300
// console.log(c);

// Children can take things from their parents same applies here, child fun can take properties from parent function but not vice versa
function one(){
    const username = "arpit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "arpit"
    if (username === "arpit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// addOne can be accessed before initialization
console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo cannot be accessed before initialization in this particular declaration due to hoisting

addTwo(5)
const addTwo = function(num){
    return num + 2
}