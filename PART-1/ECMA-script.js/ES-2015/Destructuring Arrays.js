

//Destructuring Arrays

// IS a java Script Expression that makes it possible to unpack values from arrays or properties from objet into variables.
//that is we can extract data from arrays and objects and assign them to vairables


//Traditional way

const numbers=[10,23,45];

const first=numbers[0]; 

console.log(first);


// Destructuring way

const number=[10,30,40]

const [firsts,second, third]=number;//This  is Destructuring

console.log(second);

// Ignoring the elements

//  const[, ,third]=number;

//  console.log(number);