// Mainly use when user give input or when we use loops

// let Person={};

// let x=['Rishabh',24,'Singh'];
// let y=['Name','age','Caste'];

// for(i=0;i<x.length;i++)
// {
//     Person[y[i]]=x[i]; //here the[y] it is dynamic keys after giving --[]
// }

// console.log(Person);


// --------------------------------------------------
// let user={};

// let name="rishabh";
//  user[name]="rish";

//  console.log(user);


//  ------------------------------------------


let idType= "studentid";
let student={

    [idType]: "A12346", // this square bracket makes dynami
    Name:"Rishabh-Singh",
    "is`Student": true,
    age:24,

    callmethod: (()=>{

        console.log(`Hey My Idtype--${student[idType]} is and My Name is ${student.Name} and i am student ${student["is`Student"]} and age is ${student.age}`);
    })

}

student.callmethod();

 