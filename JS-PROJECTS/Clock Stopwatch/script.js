

let startend= document.querySelector(".PlayPause");

let flag =document.querySelector(".Flag")

let secline=document.querySelector(".Line-sec");

let Retry=document.querySelector(".Retry");

let PlayPause=document.querySelector(".PlayPause");

let img=document.querySelector(".PlayPause img")

let Detail=document.querySelector(".TimerInside-Detail");

// console.log(Detail.textContent);

let isRunning=false;
let elapsedtime=0;
    let hour=0;
    let min=0;
    let sec=0;



let callfunctext=(num , digits=2)=>{
return String(num).padStart(digits, "0");

}

let timedetail=()=>{

    console.log(elapsedtime);
    
    sec= Math.floor(elapsedtime/1000);

    // console.log(sec);
   
    min=Math.floor(elapsedtime/60);
    hour=Math.floor(elapsedtime/60);

    if(sec>=60)
    {
        sec=0;
    }
    else if(min>=60)
    {
       min=0;
    }

   
    Detail.textContent=`${hour}::${min}::${sec}`;

}

let playpausecallfunc=()=>{

    flag.classList.add("button-transition");
    Retry.classList.add("button-transition");


// ---------------------------------------------------

    if(!isRunning)
    {
        
        startTime= Math.floor(performance.now()) -elapsedtime;

        console.log(`This is Tota-Time till page Is opened ${startTime}`);

         x=setInterval(()=>{

             elapsedtime = Math.floor(performance.now()) - startTime;

            //  console.log(performance.now());

             console.log(`Total No of seconds clock run ${elapsedtime}`);

             timedetail();
             
        },1000)

        // console.log("working");
        secline.classList.remove("paused");
        secline.classList.add("line-rotate");
        
       
        img.src="/JS-PROJECTS/Clock Stopwatch/Images/pause.png";
        isRunning=true;
    }
    

    else{

       clearInterval(x);          
        console.log("working");
        secline.classList.add("paused");
        img.src="/JS-PROJECTS/Clock Stopwatch/Images/play.png"
        isRunning=false;
         
    }

    // -------------------------------------------------
    
}




let retrycallfunc=()=>{

    secline.classList.remove("line-rotate");
    
}



startend.addEventListener('click',playpausecallfunc);

Retry.addEventListener('click',retrycallfunc);


