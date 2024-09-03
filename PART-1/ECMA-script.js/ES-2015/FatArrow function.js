

// ?Traditional function 

// function sum ( a,b)
// {
//         let store =`The sum of ${a} and ${b} is ${a+b}`;
//         console.log(store);
// }

// sum(5,5);

// !-----------------

// fat arrow function 

// const sum =(a=55,b=5) =>{

//     let store= a+b;
//     return store;
// }


// let x=sum();
// console.log(x);

    //  ------or-----------


//    let  multi=(a,b)=>
//     {
//         let mul=a+b;
//         return mul;
//     }

//     let mul=multi(5,5);
//     console.log(`${mul}`);


    // !----------

    // we can also write like this 

    let divide=(a,b) => console.log(`After Division of ${a} and ${b} the result is ${a/b}`);
    divide(5,5);



  // do NOTES

// //?🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted(not included).
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

// //? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = a => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

// //? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();