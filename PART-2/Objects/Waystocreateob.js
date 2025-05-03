
// Creating Object using Object Literals

let product={

    id:1,
    name:"pen",
};

console.log(product);

// ---------------------------------------------------------------

// Function---

function greet(){

    console.log("Rishabh");
}

 greet(); //---here function calling outside...



 //Method---------
 
 let student={

    rollno:43,
    Name:"Rishabh Singh",

    greet: function()
    {
        console.log(student);
    }
 };

 student.greet(); // here function defined inside the object so it is called method and we are calling method by object.method();

//  another example

let students={
    rollno:22,
    name:"rishbah Singh",

    isStudent :false, // boolean
    callmethod: (()=>{
        console.log("Using fat Arrow ");
        console.log(students);
    })
};

students.callmethod();