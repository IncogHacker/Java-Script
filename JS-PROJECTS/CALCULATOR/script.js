

let click=document.querySelector(".Clickable_Part");
let addtext=document.querySelector(".Calculation_Site")
let Mul=document.querySelector(".Multiply");
let Equal=document.querySelector(".Equal")

console.log("working")

let arr=[];
let Store=" ";
let Mulfirstclick=true;
let Mulstore1="";
let Mulstore2="";

 let handleinput=(Store)=>{

    if(["%","-","AC","Clr","=","+","/","*"].includes(Store))
    {
        return;
    }

    else{
         arr.push(Store)
    }
    localStorage.setItem("Data",JSON.stringify(arr));

    // console.log(typeof arr);

    let para=document.createElement("p");
    para.classList.add("para")
    para.textContent=Store;
    para.style.color="White";
    addtext.append(para) 

}
let  afterclickcall=(event)=>{

    if(event.target.classList.contains("Button_1"))
    {
     Store=event.target.textContent;
      
    handleinput(Store);
    }

    
};
   
let callMul=(event)=>{
   
    //Here We are deleting the all para created during input giving time
    let para= document.querySelectorAll(".para").forEach((curr)=>{

        curr.remove();
    })

    let number=parseFloat(arr.join(""));//convert arr to a number

    // we can also write like this 
    // document.querySelectorAll(".para").forEach(el=>el.remove());
  
    if(Mulfirstclick)
    {
        Mulstore1=number;
        console.log(Mulstore1);

        Mulfirstclick=false;
       
    }

    else{
        let Mulstore2=number;
        console.log(Mulstore2);
    }


    //  arr=[];
    //  Mulfirstclick=true;

    if(event.target.classList.contains(".Equal"))
    {
     callequal();
    }
  

 
}

let callequal=()=>{

   
    let Mulequal= Mulstore1*Mulstore2;
    console.log(Mulequal);

}





click.addEventListener("click",afterclickcall)
Mul.addEventListener("click",callMul)
Equal.addEventListener("click",callequal);

if(location.reload)
    {
        localStorage.removeItem("Data",arr)
    }
