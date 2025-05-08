//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.


// Example  one 


// var myvar=10;
// let functioncall=()=>{

//     console.log("Here the console work Properly and function Runs");

// }


// console.log(myvar);
// functioncall();








// --------------------------

// Example one using hoisting



console.log(myvar);
functioncall();

var myvar=10;

function functioncall(){

    console.log("Here the console work Properly and function Runs");

}

//* Before executing our code, JavaScript engine scans the code and creates a property for each variable or function in the code. For variable, It reserves space for them in memory and sets an initial value of undefined, and for functions it also reserves space but sets an initial value as a reference to the actual function in memory. That's why we can call a function, but if we try to access a variable, we will get undefined.


// console.log(myvar);
// functioncall();

// var myvar=10;

// let functioncall=()=>{

//     console.log("Here the console work Properly and function Runs"); // using arrow function not call before declartion

// }

