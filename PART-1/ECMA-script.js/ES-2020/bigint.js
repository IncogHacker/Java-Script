//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

// lets find out how max integer can js operate 

let maxnumber= Number.MAX_SAFE_INTEGER;
console.log(maxnumber);//9007199254740991 this much integer can operate by js isase upar jayega to nhi kaam krega for this use big int

maxnumber=BigInt(maxnumber);
let num=maxnumber + 10n;
console.log(num);


// console.log(maxnumber+10);//9007199254741000 why it giving wrong no idead after adding 10--bug
// console.log(maxnumber+11); //9007199254741002


// using BigInt()

const largenumber=BigInt("12324534546656768789797898");
console.log(largenumber);//12324534546656768789797898n
console.log(typeof largenumber);

const anotherlarge=("12321342343454354654652132134");
console.log(anotherlarge);