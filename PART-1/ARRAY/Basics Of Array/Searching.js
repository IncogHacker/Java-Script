

//? For Search we have - indexOf, lastIndexOf & includes
//! syntax
//! indexOf(searchElement);
//! indexOf(searchElement, fromIndex);

const persons=[`sita`,`ram`,`hari`,`vishal`,`gita`];

// console.log(persons.indexOf("vishal")); //gives output is 3
// console.log(persons.indexOf(3));  //not present so give output -1


 console.log(persons.indexOf(`ram`));



//! includes(searchElement);
//! includes(searchElement, fromIndex);


// const persons1=[`sita`,`ram`,`hari`,`vishal`,`gita`];

// console.log(persons1.includes(`hari`));//it gives output true and tell if element present in the array or not

//more example
let number=[1,2,3,4,5,6,7,8,9,10];

// let result=number.includes(10);
// console.log(result);  //gives output is true

let x = number.includes(6,3);//6 number ko index 3 se start kro search krnaaa
console.log(x);


//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// let number=[1,2,3,6,4,5,7,6,8,9,10];

// let result1=(number.indexOf(6));
// console.log(result1); ///gives output 3

// let result2=(number.lastIndexOf(6));
// console.log(result2);//gives output 7

// ! -----------------------------------------------------------------

// let number3=[1,2,3,6,4,5,7,6,8,9,10];

// let result3=number3.lastIndexOf(6,5); //index 5 se backward search krega 6 ko aur uska index dega
// console.log(result3);  //output is 3  backward search krega

// result3=number3.lastIndexOf(6,8);//..index 8 se backward search krga aur uska index dega agar 6 found hua to uske baad aage wale six ko nhi dekhega 
// console.log(result3);//output is 7


 