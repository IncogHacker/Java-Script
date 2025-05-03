

// Some Imp elements

// const x=(num,digits) => String(num).padStart(digits,"0");

// console.log(x(2 ,4));  //gives the output 0002


// same as this 

let format=((num,digit=2)=>{

return String(num).padStart(digit,"0");

});

console.log(format(3)); //gives 03


// let str="5";

// let Y= String(5).padStart(3,"0");
// console.log(Y);

