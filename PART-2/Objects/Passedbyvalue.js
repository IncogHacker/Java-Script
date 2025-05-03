//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.


// Passed BY VAlue 

let a=10;

let callvalue=(a)=>(a=20);

console.log(callvalue(a));//20 When a primitive type (like number, string, boolean) is passed to a function, a copy is passed.Changing it inside the function does not affect the original value.

console.log(a);//10


