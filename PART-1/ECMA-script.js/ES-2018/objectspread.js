
//Ater 2018 we can use rest-parameter and spread in objects

let objects={

    Name:"Rishabh Singh",
    age:"25",
    student:true,

};

// console.log(objects);           //{ Name: 'Rishabh Singh', age: '25', student: true }
// console.log({...objects});      //{ Name: 'Rishabh Singh', age: '25', student: true }

let {age , ...others}=objects;

console.log(others);//age ko chor kr sara leliya others ne andar rest parameter


///?Adding objects using Spread operator

let obj1={a:10,b:20,c:30}
let obj2={c:40,d:50,e:60}

let store={...obj1,...obj2}

let store2={...obj2,...obj1}

//...obj1={a:10,b:20,c:30}
// ..obj2={{c:40,d:50,e:60}}// when combine obj2 see that c value is 40 so it change it obj2 spread second time so it overwrites c value

console.log(store);//{ a: 10, b: 20, c: 40, d: 50, e: 60 } doest not take same values
console.log(store2);//{ c: 30, d: 50, e: 60, a: 10, b: 20 }