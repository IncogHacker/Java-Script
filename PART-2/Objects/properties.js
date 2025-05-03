
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

let students={

    rollno:34,
    Name:"Riya Singh",

    "is`Student" : false,

    callmethod: (()=>{
        console.log("here Nothing to show");
    })
}

console.log(students.rollno);
console.log(students["is`Student"]);

console.log(students.Name);/// this is dot notation
console.log(students["Name"]); // this is square notation

students.callmethod();




//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones: