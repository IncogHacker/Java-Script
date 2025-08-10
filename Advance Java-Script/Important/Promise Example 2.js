
const studentName="Vinod"
let callinffucn=(studentName)=>{

    return  new Promise((resolve,reject)=>{

        const issuccessful= Math.random()>0.4;

        if(issuccessful)
        {
            resolve("Student Marks Good get Admitted");
        }

        else{
            reject("Student Is not Admitted");
        }
    })

}


callinffucn(studentName)

.then((res)=>{
console.log(res)
})
.catch((err)=>{
console.log(err)
})
.finally(()=>{
    console.log("Admission Process is Completed")
})