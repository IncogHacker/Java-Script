
let shr = document.querySelector(".hour-line");

let smin = document.querySelector(".minute-line");
let sec = document.querySelector(".second-line");



let callfunction = () => {

    let time = new Date();    

    let hours = time.getHours();
    
    let minute = time.getMinutes();
   
    let seconds = time.getSeconds();





    console.log(time.toLocaleTimeString());



    let rotateHour = 30*hours + minute /2;

    shr.style.transform = `rotate(${rotateHour}deg)`;



    let rotatemin = 6 * minute;

    smin.style.transform = `rotate(${rotatemin}deg)`


    let rotatesec = 6 * seconds;

    sec.style.transform = `rotate(${rotatesec}deg)`






};


setInterval(callfunction, 1000);





