//! Write a program to perform mathematical operations using callback functions and two variables in JavaScript.

//! Example  one

// let addingfunc=(x,y,callback)=>{

//     callback(x,y);
// }

// let callback=(x,y)=>{

//     console.log(x+y);
// }


// addingfunc(2,3,callback)


// !Example 2


let x=3,y=4;
let Mathoperation=(a,b,operation)=>{

    return operation(a,b);

}
function add(a,b){// add is callback function and we can not include operation coz its parameter we should add real function

    return a+b;
}

function sub(a,b)
{
    return b-a;
}



console.log(Mathoperation(x,y,add))//Mathoperation is first order function 
console.log(Mathoperation(x,y,sub))