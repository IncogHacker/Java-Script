//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand. null or undefined ho tabhi false mana hai wrna nhi manana hai 
let number1= 0; ///alway take as false

usefavnum1= number1 || 10;

console.log(usefavnum1);


//Using nullish 

let number=0;
userfavnum= number ?? 10;//left hand is not null or undefined so it return left hand

console.log(userfavnum);//return true value that is 0


// let number= number ? 2:false;  //condition ? value_if_true : value_if_false;