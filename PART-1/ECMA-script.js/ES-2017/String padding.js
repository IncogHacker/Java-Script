

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//using padstart() to pad from the begining

let company = "ChandraPVtiti";

let beforepad= company;
console.log(beforepad);
console.log(beforepad.length);

let afterpad= company.padStart(100,"*");
console.log(afterpad);///give the spaces or extra characters
console.log(afterpad.length);//87 free spaces + 13 words of my company


//Using Pad End

let Name="Rishabh Singh"

let store =Name.padEnd(30,"*");

console.log(store);// Rishabh Singh.................
console.log(store.length);

