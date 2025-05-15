

//? trimStart(): Return a new string with removed white space from the start of the original string
//? trimEnd(): Return a new string with removed white space from the end of the original string

let str= "                       Rishabh   Singh ";

console.log(str.length);//give length 12 count space also

console.log(str.trim().length);//faltu space removed by trim()

console.log(str);//                       Rishabh   Singh 

console.log(str.trim());//Rishabh   Singh  -----remove the spaces from left and right side but not between the words


