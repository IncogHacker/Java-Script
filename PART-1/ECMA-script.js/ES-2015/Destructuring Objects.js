

// Destrcuturing objects

let Name={
    Student:"Rishabh",
    rollno:23
};


// console.log(Name.Student);//Traditional Way

let {Student ,rollno}=Name;

//Basically here we dont have to write object name
// console.log(Student);
// console.log(rollno);

// renaming properties or custom name
let {Student: Stchanges}=Name;
console.log(Stchanges);
// console.log(age);