
// Examples

const Product=[

{
   id:"01",
   ProductName: "CetaPhil",
   Category: "Cream Ultra White",
   Brand : "Indian Cetaphil",
   Price :999.99,
   stock:"1 stock = 50rs",

   description:"Here you get the best cream in the world which you cant ignored and when you start using you are falling in love with them",

   greetcall: function()
   {
    console.log(this.ProductName);
   }
},



{
    id:"02",
    ProductName: "CetaPhil--FAcewash",
    Category: "Cream Ultra White -Facewash",
    Brand : "Indian Cetaphil",
    Price :100.99,
    stock:"1 stock = 56rs",
 
    description:"Here you get the best cream in the world which you cant ignored and when you start using you are falling in love with them",


    greetcall: function()
    {

        console.log(this.ProductName);
    }

}
]


Product[1].greetcall();



// we only want key of object not the value 

let keys = Object.keys(Product[0]);

console.log(keys);//give the array 0 keys only....


let Values= Object.values(Product[1]);

console.log(Values);


//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

///like example  [ 'id', '01' ],

let entries= Object.entries(Product[0]);

console.log(entries);


//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.


let hasownproperty=(Product[0].hasOwnProperty('ProductName'));//check that property exist on object or not 


console.log(hasownproperty);





// Object Assign

const x=  { a: 1, b: 2 };
const y=  { b: 3, c: 4 };
const newobj = Object.assign(x,y);

console.log(newobj);//gives Output ----{ a: 1, b: 3, c: 4 }  havig 3 key value pair 

// here x is target where y is storing there b and c in X ...but y object overwrites the x object b and give thier own b value
//key never be same in object thats why source (y)  overwrites b


// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }



//object freeze

let Free={

    id : "01",
    Name :"Rishabh Singh",

    callFree:  function(){

        console.log(Free.id);
    }
}

Object.freeze(Free);//object is freezed not changed
Free.id="02";

Free.callFree();



