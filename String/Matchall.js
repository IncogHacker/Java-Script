

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.



let names="hello my name is rishabh singh JavaScript and what about you";

let store= names.matchAll("JavaScript");

//todo (js doing these all things implicit in matchall) here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end automatically..



console.log(store);  // output---- Object [RegExp String Iterator] {} (this is empty iterator)
console.log(...store); //output is 

// spread operator open up the iterator
// [
//     'JavaScript',
//     index: 31,
//     input: 'hello my name is rishabh singh JavaScript and what about you',
//     groups: undefined
//   ]


// **********************************************************************************************


// using for loop 

let names3="hey javascript hi me to javascript that a very brighten day luuul";

let store2=names3.matchAll("javascript");

for(let item of store2)
{
    console.log(item);

     
}


//output
// [
//     'javascript',
//     index: 4,
//     input: 'hey javascript hi me to javascript that a very brighten day luuul',
//     groups: undefined
//   ]

//   [
//     'javascript',
//     index: 24,
//     input: 'hey javascript hi me to javascript that a very brighten day luuul',
//     groups: undefined
//   ]