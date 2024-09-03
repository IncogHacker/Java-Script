

//? match() : Returns an array of the matched values or null if no match is found.

// todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag


let text="hello My name is rishabh singh i am also a man with two singh";

let store=text.match("singh");   // if not matched return the null or give output null

let store2=text.match(/singh/);  //also give the same output  in the last

let store3=text.match(/singh/g); // output is [ 'singh', 'singh' ] //search that singh kitni bar present hai globally

console.log(store); 

console.log(store2);

console.log(store3);

// [
//     'singh',
//     index: 25,
//     input: 'hello My name is rishabh singh i am also a man with two singh',
//     groups: undefined
//   ]



