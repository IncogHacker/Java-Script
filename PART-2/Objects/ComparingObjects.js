
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.


// let Object1={

//     student:"Rishabh Singh",
//     rollno:43,
//     class:"none",

//     greet1: function(){

//       return this.student;
//     }
//   }


//   let Object2={

//     student:"Riya SIngh",
//     rollno:23,
//     classss:"Mcom",

//     greet2: function(){

//       return this.student;
//     }

//   }

//   if(Object1.greet1()==Object2.greet2())
//   {
//     console.log("True");
//   }

//   else{
//     console.log("False")
//   }


// 2nd way  ------------

callcompare = (objA, objb) => {


    let x = Object.keys(objA); ///return A array Form
    let y = Object.keys(objb);

    // console.log(x);
    // console.log(y);

    if (x.length != y.length) /// Comparing Objects on Basis of length after converting into Array...
    {
        return false;
    }


    for(let item in objA)
    {

        if(objA[item]!==objb[item])//objA["Name"] !== objb["Name"] → "Rishabh Singh" ≠ "Riya Singh" → false
        {
           return false;
        }

      
    }

return true;


}


let objA = { Name: "Rishabh Singh", Age: 67, city: "NEw York" };
let objb = { Name: "Riya Singh", Age: 45, city: "Varanais" };
let objc = { Name: "Vishnu Singh", Age: 56, city: "Ghazipur" };



console.log(callcompare(objA, objb));
