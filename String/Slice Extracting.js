
//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// ! slice(start, end);


let names="Rishabh Singh";

console.log(names.slice(5));// output bh Singh not include index end

console.log(names.slice(0,2));// output is Ri  not include indexend means only include 0 and 1 that is Ri

let store= Array.from(names);

console.log(store);


let main=" ";
for(let item of store)
{
  main+= item.replace(`h`,`o`);

}

console.log(main); // Risoabo Singo




//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.