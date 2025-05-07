//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Inside Array  Two different objects

let student=[

      {
       id: "A01",
       Name: "Rishabh Singh",
       Rollno: 32,
       Age:23,
       Subjects: ["Science","Maths","English"],

       Contact:{
        email:"rishabhsinghsos123@gmail.com",
        phone:9431047079,
       },

       callmethod: (()=>{

        console.log(student[0]);

       })

    },

    {
        id:"A01",
        Name:"Riya Singh",
        Rollno:23,
        Age:21,
        Subject:["Science","Maths","English"],

        Contact:{

            email:"riyasingh123@gmail.com",
            phone:9455642939,
        }
    },
]

// Different Ways To print output   

// console.log(student[0]);

// student.forEach((current)=>{

//     console.log(current);
// })


student[0].callmethod();