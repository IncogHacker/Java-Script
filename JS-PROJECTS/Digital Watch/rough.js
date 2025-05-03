let date= new Date();

let hour =date.getHours();

let ampm = hour >=12 ? 'PM' : 'AM';//(0-23 hrs format)

// console.log(ampm);


let Time= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${ampm}`;



let para=document.getElementById("para");

para.append(Time);

para.style.color=" rgb(229, 89, 152)";