
// using a map method  write a function that takes an array  of names and returns a new array where each name is prefixed with Mr..

// const array=[`rishabh`,` riya `,`nandani`, `vishnu`];

// let storefunc= array.map((current)=>{

//    return  `Mr `+current;

// });

// console.log(storefunc);



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const array=[`rishabh`,` riya `,`nandani`, `vishnu`];

let store= array.map((current)=> ` Mr ${current}`);
console.log(store);