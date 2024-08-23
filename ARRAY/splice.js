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