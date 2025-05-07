
let student={

    name:"RIshbah Singh",
    rollno:42,

     callthis: (()=>{ // Using Arrow function Give windows Global 

        console.log(this);

    })
}

student.callthis();

// ----------------------------------------------------------------------------

let studentss={

    NAme:"Rishabh SIngh",
    rollno:32,

    callthis()  // here using Regular Function Gives object   --- Method Shorthand
    {
        console.log(this);
    }
}

studentss.callthis();



// ------------------------------------------------------------


let st={

    Name:"Rishabh Singh",
    ROllno:32,

    greetcall: function() {   //this is not short hand method calling 

        console.log(this);
    }
}

st.greetcall();




