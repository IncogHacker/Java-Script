//  remember  function always bottom to up
// Example one 

//?here is promise is settled or resolved 

const pr= new Promise((resolved,reject)=>{

    setTimeout(()=>{
        resolved("Hi Promise is resolved");
    },2000)


});
pr.then((response)=>{

    console.log(response);
}).catch((error)=>{

    console.log(error);

}).finally(()=>{

    console.log("Finally working");
})


//?here promise is not resolved

const prs=new Promise((resolved,rejected)=>{

    setTimeout(()=>{
 rejected("Promise is Rejected");
    },1000)
   
});


prs.then((fs)=>{
console.log(fs);
}).catch((error)=>{

    console.log(error);

}).finally(()=>{
    
    console.log("No matter what happened finally prints again")
})