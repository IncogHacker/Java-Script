

// Suppose you want to transform each character of a string, such as converting each character to uppercase.


//simple way ..

// const str=`hello world`;

// const storeuppercase= str.toUpperCase();

// console.log(storeuppercase);


// Using map method ( first convert string into array using split method and then convert array to string using join method)

const str2 = `hello world`;

// const store = str2.split(``).map(current => current.toUpperCase());  //! we can write by this method or the down one

const store = str2.split(``).map((current) => {

    return current.toUpperCase();

});

const storejoined = store.join(``);

console.log(storejoined);