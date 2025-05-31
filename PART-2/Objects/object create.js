



const student= Object.create(null);

console.log(typeof student);

student.name="Vinod";
// console.log(Object.hasOwnProperty(name));//not work coz object is nulll
console.log(Object.hasOwn(student,"name"));//gives True
