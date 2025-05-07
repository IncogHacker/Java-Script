

// 1st--Example


let product={

    id:"01",
    NameofProduct:"CetapHill",
    Price:999.9,
    Stock:"50-rs",

    grades:{

        MAths: "90",
        English:"45",
        Science:"32"


    },

    calladding: function(Object,Key,VAlue){

        product.grades[Key]=VAlue;
        console.log(product);
       
    }
}


product.calladding(product,"Physical","98");




// 2nd Example 


let studnet={

    Student1:"Rishabh Singh",
    Student2:"Riya Singh",
    Studnet3:"Nandani Singh",

    calladdfunc: function(object,Key,Value){

        object[Key]=Value;
        console.log(object);
    }
}

studnet.calladdfunc(studnet,"Student4","Vishnu Singh");


// 3rd Example

let Student={

    name:"Rishabh singh",

    grades:{
        Maths: "78",
        English:"98",
        Biology:"65",

       
    },

    calladd: function(Object, Key ,Value)
    {
      if(!Object.grades)
        {
            Object.grades={};
           
        }  

       return(Student.grades[Key]=Value)
    }

}


Student.calladd(Student,"Chemistry",78);

console.log(Student);