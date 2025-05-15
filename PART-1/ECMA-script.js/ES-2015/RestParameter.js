//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

// for Example without Rest parameters

let sum=(a,b,c,d,e)=>{

    return a+b+c+d+e;

}
console.log(sum(1,2,3,4,5));// Give output 15


// With rest Parameter do not need to use all parameter one by one

let Add=(...numbers)=>{// here only single parameter using other or resting ... use as rest parameter not spread
// and rest parameter ek sath saare arguments ko apne andar smma leta hai isko start me nho likhte like
//(a,b,...numbers) a ko 1 milla , b ko 2 milla, ...number saare rakh liyaa..
    console.log(typeof numbers)//object

   let total= numbers.reduce((accumulator,current, indexedDB, arr)=>{
        
        return accumulator + current;

    },0);

    return total;
}


console.log(Add(1,2,3,4,5,6,6,7,8));//now here we can increase argument to infinite

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}