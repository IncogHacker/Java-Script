
//? 1: push(): Method that adds one or more elements to the end of an array.

// let names=['rishabh', 'riya','lali' ];

    // names.push("nandani");
    // console.log(`${names}`); //add nandani in array in last

    // console.log(names.push("shikha")); //give ouput as length (5)

    // console.log(names);//after adding shikha in array






//? 2: pop(): Method that removes the last element from an array.


// let namess=[`rishabh`,`riya`,`nandani`];

// namess.pop("");

// console.log(`${namess}`);  //remove a element end of an array like here remove nandani

// console.log(namess.pop(""));//Gives the deleted element or the last element which is popped out by this syntax of array










//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

// let fruits=[`apple`,`mango`,`guava`];

// fruits.unshift(`green-apple`);

// console.log(`${fruits}`);  //it adds the new array element in first position

// console.log(fruits.unshift("vxfv"));/// gives the length after adding vxfv in array as a new element







//? 4: shift(): Method that removes the first element from an array.

// let fruit=[`apple`, `guava`, `pomogranate`];

// console.log(fruit.shift("")); //give first element in array after removing

// console.log(fruit); //after removing apple it give output



//? The splice(start , deleteCount , item1 ,item2....n) method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// let fruits=[`apple`, `mango`,`guava`,`pomogranate`];

// fruits.splice(`apple`);
//  console.log(fruits); //gives output as empty array if we use splice here

 


// let fruits2=[`apple`,`mango`,`guava`,`pomogranate`];
// console.log(fruits2.splice(2)); //it gives output apart from apple [  'guava', 'pomogranate' ]


// let fruits3=[`apple`,`mango`,`guava`,`pomogranate`];
// fruits3.splice(3);
// console.log(`${fruits3}`);//gives output only 1 to 3 apple,mango,guavas

// let fruits4=[`apple`,`mango`,`guava`,`pomogranate`];
// console.log(fruits4.splice(2));  //gives output [ 'guava', 'pomogranate' ]


// ! ------------------------------------------------------------------

let fruits5=[`apple`,`mango`,`guava`,`pomogranate`];

// fruits5.splice(2,1);

// console.log(fruits5); //2 se start ho rha aur ek element delete kr rha that is guava


//only delete mango

// fruits5.splice(1,1);
// console.log(fruits5);


// Adding element in some other element

let pen=[`blue`,`red`,`green`,`black`];

pen.splice(-2,0,"replaced");
console.log(pen); //this is output [ 'blue', 'red', 'replaced', 'green', 'black' ]


// to add replaced in last or end of array 
let pen2=[`blue`,`red`,`green`,`black`];
pen2.splice(pen2.length,0,"replaced");
console.log(pen2);