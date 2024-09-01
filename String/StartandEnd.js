
//? startsWith():The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:


let string="rishabh singh";

let result=string.startsWith("r");

let result0=string.startsWith("r",0); //r 0 poisition se start ho rha ki nhiii

let result2=string.startsWith("s");

console.log(result);// here output is true coz my string starts with r which matches with startsWith("r");

console.log(result2);//false

console.log(result0);



//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:


let string2="hey this is rishabh singh";

let result3=string2.endsWith("singh");

console.log(result3);