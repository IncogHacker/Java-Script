
//??This is mine way to use javascript 

let callmainP=(event)=>{

    if(event.target.classList.contains("differe_div"))
    {

        let storeAtomicnumber= event.target.textContent.match(/\d+/)[0];///here we use regex 
//?         // The .match() method is used to find parts of a string that match a regular expression.
//?         ///\d+/ is a regular expression that means:
//?         //\d = any digit (0–9)
//?         //+ = one or more of the previous token (so, one or more digits) and the match return array like this ['23']

        // console.log(storeAtomicnumber);
       window.alert(`Atomic Number:  ${storeAtomicnumber} \n Element Name :${event.target.textContent}`);
      
    }
    else{
    
        window.alert("Error");
    
    }
}



    function Initializetable() {

        let mainParent = document.querySelector(".Parent")

        for (i = 0; i <= 50; i++) {
            let divs = document.createElement("div")
            divs.textContent = `Elem ${i}`;
            divs.style.border = "2px solid  red"
            divs.style.width = "5rem"
            divs.style.height = "5rem"
            divs.classList.add("differe_div")
            mainParent.append(divs);
        }

       mainParent.addEventListener("click",callmainP);
       
    }

   
    Initializetable();



    // Here we See another way to execute the Program 


    
       
       

      