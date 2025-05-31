


let objects = {

    Name: "RIshabh Singh",
    Rollno: "43",

    grade: {

        maths: "90",
        english: "45"
    },

    callfunc: function (objects, key, value) {

        objects[key]=value;

        let newobj = {}

        for (let k in objects)
             {
            if (typeof objects[k] != "function")

               newobj[k]=objects[k]
            console.log(newobj);

        }

    }
}


objects.callfunc(objects, "Age", "65");




