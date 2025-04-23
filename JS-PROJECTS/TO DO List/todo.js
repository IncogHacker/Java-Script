


let add = document.querySelector(".input button");

let container = document.querySelector(".Container");

let input = document.querySelector(".input input");



let array=[];

let calladdfunc = () => {


    if (input.value == "") {
        input.placeholder = "First Add Some Task"

    }
    else {

         array.push(input.value);

         localStorage.setItem("data",JSON.stringify(array));
        
        let newdivconatiner = document.createElement("Div");

        newdivconatiner.classList.add("new-content");

        let imgBefore = document.createElement("img");
        imgBefore.src = "/JS-PROJECTS/TO DO List/images/checkedss.png";
        imgBefore.style.width = "30px";
        imgBefore.style.height = "30px";
        newdivconatiner.append(imgBefore);




        let para = document.createElement("p");

        para.classList.add("parag")

        newdivconatiner.append(para);

        para.textContent = input.value;

        container.append(newdivconatiner);

        para.addEventListener('click', (event) => calltext(event, imgBefore));

        let img = document.createElement("img");
        img.classList.add("image");
        img.src = "/JS-PROJECTS/TO DO List/images/cross.png";
        img.style.width = "15px";
        img.style.height = "15px";
        newdivconatiner.append(img);

        img.addEventListener('click',()=> funcremove(para,newdivconatiner));

        console.log(container);

        input.value = "";

        input.placeholder = "Add Task";
    }
}


add.addEventListener('click', calladdfunc);


let calltext = (event,imgBefore) => {

    // event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "none" : "line-through";


    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";

        imgBefore.src = "/JS-PROJECTS/TO DO List/images/checkedss.png";
        imgBefore.style.width = "30px";
        imgBefore.style.height = "30px";
        
    }
    else {

        event.target.style.textDecoration = "line-through";

        imgBefore.src = "/JS-PROJECTS/TO DO List/images/checked.png";
        imgBefore.style.width = "30px";
        imgBefore.style.height = "30px";


    }



}

let funcremove=(para,newdivconatiner)=>{


    

    let deletedtext= para.textContent;

    console.log(deletedtext);

    newdivconatiner.remove();

    console.log(array);

    array=array.filter(item => item!== deletedtext);

    localStorage.setItem("data",JSON.stringify(array));

    
    

}