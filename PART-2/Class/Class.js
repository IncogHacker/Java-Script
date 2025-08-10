// A class in JavaScript is a template for creating objects with shared properties and methods.
// It’s a cleaner and easier way to create multiple objects that share the same structure and behavior.

// ! class is like empty form(like a template) in which we fill our details called object 

class Flight {

    submitted() {//these are the methods or objects

        alert("Flight is Not cancelled")
    }

    canceled() {

        alert(this.name + "Flight is cancelled")
    }

    fill(name) {

        this.name = name;
    }

}
// These are called instances of the Flight class — and each one is a separate object created using new Flight(). (Flight1 and Flight2)

let Flight1 = new Flight();  ///Creates a new object using the Flight class Creates first instance
Flight1.submitted();//Calls the submitted() method on Flight1


let Flight2 = new Flight();// Creates another object in same class 2nd instance
Flight2.fill("harry");
Flight2.canceled();




