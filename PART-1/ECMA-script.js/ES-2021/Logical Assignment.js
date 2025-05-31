//* =====================================================
//*  Logical Assignment Operators (||=, &&=, ??=)
//* ====================================================

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.

let x=true;

x = x || false

console.log(x);//or operator gives true

// ----------------------

// example 2

let y=10;
y||=20;//if y is true value then it print 10 otherwise y is false it will print 20

// ? this also writeen as

y= y||20; //agar y ki value false hoti to y me 20 store hotaa
console.log(y);

// same as writen in if 
// let r=20; //block will not run
// if(!r)
// {
//     r=20;
//     console.log(r);
// }

let r = 0; //block will run coz o take as a falsy in javascript
if (!r) {
    r = 20;
    console.log(r); // Output: 20
}