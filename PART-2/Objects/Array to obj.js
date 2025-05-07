//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
  

let student=

[
   {

    id:1,
    Name:"Rishabh SIngh",
    RollNO:"43",
    Age:23,
   },

   {
    id:2,
    Name:"Riya Singh",
     age:23,
     ROllmo:"23"
}
]

// let key=Object.keys(student);
// console.log(key);

const array=((arr)=>{

let obj={};

for (let item of arr)
{
// console.log(`${item.id}:${JSON.stringify(item)}`);
(obj[item.id]=item);  //obj[1]=item
}

return obj;

})


console.log(array(student));