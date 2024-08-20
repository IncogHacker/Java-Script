

let firstName= "Rishabh";
let secondName= "Singh";

// console.log("Your name is "+firstName+secondName);

// !-----------------------------------------------------

// let store=firstName+secondName;
// console.log(store);

//! --------------------------------------

// let store = "Rishabh " + "Singh";
// console.log(store);

// !-------------------------
// !Modern way to write 

// let store=`${firstName} ${secondName}`;  //?Automatically space give so no need to give space and important to use back tick and dollar sign. 

// console.log(store);


// ******************************************************************************************************

//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string means in between string ham koi bhi expression ya variable store kr saktein. Interpolated expressions are enclosed in ${}

let age=24;

var string=`I AM ${age} YEARS OLD `;

console.log(string);

//! --------------------------

//? Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters using back tick.

let multi= `hi my name is rishabh singh
i am a developer and you are 
just try to create my self well preserved `;

console.log(multi);



// *****************************************************************************************************

// Default parameter 

function sum( a=10 , b=10) // giving the default value 
{
    return a+b;
}

console.log(sum());


