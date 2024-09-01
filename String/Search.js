

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.

//* Returns the index number where the first match is found. Returns -1 if no match is found.

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value


// Syntax:

// str.search(regexp)  

// str is the string you're searching within.

// regexp is the regular expression you're searching for.


let words = "Hello javaScript , welcoe to our javaScript world best studio";

let store1=words.search(/javaScript/g); // here g denotes global means har jagah dekhega kahan hai javaScript output is 6

let store2=words.search(/javascript/i); // here i denotes the case sensitive mean ignore the small and capital letter

let store3=words.search(/javascript/g); // here i not declare and in javascript s is small so it give -1

console.log(store1);
console.log(store2);
console.log(store3);

