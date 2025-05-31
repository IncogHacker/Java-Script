

let callouter = (event) => {

    console.table([
        {
            Description: "Hi I am Outer One",
            target: event.target,
            currenttype: event.currentTarget,
        }
    ])

};

let callMiddle = (event) => {

    console.table(
        [
            {
                Description: "Hi I am Middle One",
                target: event.target,
                currenttype: event.currentTarget,

            }
        ]
    )
};

let callinner = (event) => {

    console.table([{
        Description: "Hi I am Inner One",
        target: event.target,
        currenttype: event.currentTarget,

    }]);
    // event.stopPropagation(); //when we click on inner it will show only Inner so use stop propagetion
}
//?here bublling Phase Down to Up(by default Bubbling phase) 
// document.querySelector(".Outer").addEventListener("click", callouter)
// document.querySelector(".Inner").addEventListener("click", callinner)
// document.querySelector(".Middle").addEventListener("click", callMiddle)


//? we can also do like whenever we click on parent outer - inner and middle are also fired(top to bottom) outer to middle show Capturing Phase for this we should pass true

document.querySelector(".Outer").addEventListener("click", callouter,true)
document.querySelector(".Inner").addEventListener("click", callinner,true)
document.querySelector(".Middle").addEventListener("click", callMiddle,true)

