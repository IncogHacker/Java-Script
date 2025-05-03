//Passed by Reference

// When a non-primitive type like an object or array is passed to a function, a reference is passed.
// Changes inside the function do affect the original object.--get the original data

let Names={name : "Rishabh"};

let callpassedbyReference=((obj)=>{

    obj.name="Vinod";

})
callpassedbyReference(Names);
console.log(Names.name);


// Here, you're passing the object Names to the function.

// Since objects are passed by reference, the function receives a reference to the same memory location as Names.

// So changing obj.name actually changes Names.name

// Names is an object.

// Objects are passed by reference in JavaScript.

// So obj.name = "Vinod" modifies the same object in memory.

// ------------

let obj={id: 5, Name:"Rishabh"};

let obj1=obj;

obj1.Name="Singh";///we are changing the original Data
// console.log(obj1);

// console.log("Original"+obj); // here gives Original[object Object]  -type coercion where when we add with string it want to change into string thats why ..

// so 

console.log("Original--",obj);//give object data original which changed



// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

//? Object.assign() is used to copy properties from one or more source objects to a target object.

// Object.assign(target, ...sources);

// target: the object you want to update

// sources: one or more objects whose properties you want to copy


const Students={ id:"01" , Name:"Rishabh Singh"}

const obj2={};

Object.assign(obj2,Students); /// here we store original data in obj2 so if we want to make change we make in this without touching original object student

callbyReferenced=(x)=>(x.Name="Ujala Singh");

callbyReferenced(obj2);

console.log(obj2);

console.log("Original",Students);

