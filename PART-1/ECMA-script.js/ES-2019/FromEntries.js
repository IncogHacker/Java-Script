

//* ============================
//*  Object.fromEntries()
//* =============================
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key, value] pairs:

//? ES2019 introduces a new Object.fromEntries() method, which can create a new object from such array of properties:

let objectEntries={

    Name:"Rishabh",
    Petname:"Singh",
}

console.log(objectEntries);//{ Name: 'Rishabh', Petname: 'Singh' } 
console.log(Object.entries(objectEntries));//[ [ 'Name', 'Rishabh' ], [ 'Petname', 'Singh' ] ]

let store=Object.entries(objectEntries);
let flatentries=store.flat(Infinity);
console.log(flatentries);//[ 'Name', 'Rishabh', 'Petname', 'Singh' ]


//Now We will Use fromEntries gives Original data as like object 

let store2=Object.fromEntries(store);
console.log(store2);//{ Name: 'Rishabh', Petname: 'Singh' }  


console.log(store == store2);//gives false..
//  [ [ 'Name', 'Rishabh' ], [ 'Petname', 'Singh' ] ]  =  store
//  { Name: 'Rishabh', Petname: 'Singh' }  = store2


//both store and store2 store in different memories and we are comapring there address not the keys and value