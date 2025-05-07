//* Comparison by Reference:


//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

let obj1={name:"Vinod1"}
let obj2={name:"Vinod1"}

let obj3=obj1;

let isequal= obj1 == obj2 ? true : false;

console.log(isequal); //give false always of different object

let iseq= obj1==obj3 ? true :false;

console.log(iseq);