
//Passed by value

let number=20;


callpassedbyvalue=(x)=>(x=19);

console.log(callpassedbyvalue(number));//here we get 19 original not changed
console.log(number);


// See Carefully and Notice the Difference

//passd by Reference
let Student={id:"01", Name:"Rishabh"};

passedbyRefer=(x)=>(x.id="02");

passedbyRefer(Student);///here this function gives the reference so whole object changed
console.log(Student.id);