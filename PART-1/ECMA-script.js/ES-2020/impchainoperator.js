
//* =======================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties. It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.

// const person = {
//   name: "John",
//   address: {
//     city: 0,
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "city is not present";
// console.log(city);

//? with optional chaining
// const city = person.address?.city ?? "city is not present";
// console.log(city);




//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//     coordinates: {
//       latitude: 40.7128,
//       longitude: -74.006,
//     },
//   },
// };

// // Accessing deeply nested properties with optional chaining
// const latitude = person.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);