
let first = document.getElementById("one");
let sec = document.getElementById("two");

let copy = document.getElementById("copie");




let findhexvalue = () => {

    let storeclrvalue = "#";

    let hexadecimal = "0123456789abcdef";


    for (let i = 0; i < 6; i++) {
        storeclrvalue += hexadecimal[Math.floor(Math.random() * 16)];
    }

    // console.log(storeclrvalue);


    return storeclrvalue;

}

let callfunc = () => {



    let btn1color = findhexvalue();

    console.log(btn1color);



    first.style.backgroundColor = `${btn1color}`;

    first.textContent = `${btn1color}`;

    document.body.style.backgroundImage = `linear-gradient(to right top,${btn1color},${btn1color},${btn1color},${btn1color}, #000000)`;

    copy.textContent = `backgroundImage----linear-gradient(to right top ,${btn1color},${btn1color},${btn1color},${btn1color}, #000000)`;





}



function callfunc2() {


    let sec1 = findhexvalue();

    sec.style.backgroundColor = `${sec1}`;

    document.body.style.backgroundImage = `linear-gradient(to right top, ${sec1},${sec1},${sec1},${sec1},#000000)`;

    copy.textContent = `backgroundImage ---linear-gradient(to right top, ${sec1},${sec1},${sec1},${sec1},#000000)`;

}


first.addEventListener('click', callfunc);
sec.addEventListener('click', callfunc2);



let copycallfunc = () => {


    navigator.clipboard.writeText(copy.textContent)
        .then(() => alert("Copied!!  " + `${copy.textContent}`))
        .catch(() => alert("error"));


    // window.alert(`Text is Copied ${copy.textContent}`);


}

copy.addEventListener('click', copycallfunc);


// -----------------------------------------------------


let colorinput= document.querySelectorAll(".colors input")

let smallboxs=document.querySelector(".smallbox-gradient");

let select= document.querySelector(".direction select ");

let Cp =document.querySelector(".copycode p");

let btncopy=document.querySelector("#copy");

let btnr= document.querySelector("#refresh");




let callref=()=>{


    window.location.reload();
    window.alert('Refreshing');
}


btnr.addEventListener('click',callref);


let copycode=()=>{

 navigator.clipboard.writeText(Cp.textContent)
 .then(()=> alert("Copied"))
 .catch(()=> alert("erorr"));

}

btncopy.addEventListener('click',copycode);



let callinggradient=()=>{

// console.log(colorinput[0].value);

let gradient=`linear-gradient(to ${select.value}, ${colorinput[0].value} , ${colorinput[1].value})`;

Cp.textContent= gradient;

console.log(gradient);


console.log(smallboxs);
smallboxs.style.backgroundImage = gradient ;



}

colorinput.forEach((current)=>{

console.log(current);

current.addEventListener('input', callinggradient);


});





















