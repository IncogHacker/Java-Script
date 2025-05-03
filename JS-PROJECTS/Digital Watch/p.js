


let callfunction=()=>{

    let date=new Date().toLocaleTimeString();

    console.log(date);
    document.getElementById('para').textContent=date;

}


callfunction();


let x= setInterval(()=>{

    callfunction();
},1000);


// setTimeout(()=>{

//     clearInterval(x);
// },5000);