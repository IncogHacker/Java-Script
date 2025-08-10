// !Example Two with callbackfunction



let highorderfunc = (name, callback) => {

    // console.log(`${name}`);

    callback(name);//this is call back func coz it callfunction inside a fucntion

    // A callback function is a function passed as an argument to another function, and it is called (executed) inside that function.

    // So, instead of saying “calling another function inside a function,” it's more correct to say:
}

let callback = (name) => {

    console.log(`${name}` + "  singh");

}



highorderfunc("Rishabh", callback)//here is high order function coz it passes as a fucntion as argument inside a function

