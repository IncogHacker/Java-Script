

// <!-- Definition: A higher-order function is a function that takes one or more functions as arguments or returns a function as a result. -->

//! Example one 

// let callfunc1=()=>{

//     console.log("this is function one");
// }

// let callfunc2=()=>
//     {
//         console.log("This is function Two")
//     }



// let Highorder=(func1,func2)=>{

//     func1();
//     func2();

// }

// Highorder(callfunc1, callfunc2);


// !Example Two with callbackfunction



let highorderfunc=(name,callback)=>{

    // console.log(`${name}`);

    callback(name);//this is call back func coz it callfunction inside a fucntion


}

let callback=(name)=>{

console.log(`${name}`  +  "  singh");

}



highorderfunc("Rishabh",callback)//here is high order function coz it passes as a argument inside a function



