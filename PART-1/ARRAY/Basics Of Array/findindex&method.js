 
 
 
 //!Search +  Filter (total 3 methods)---

// 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.



// find method ----jo first pe occur krega whi find method output dega jaise ki 6

// Q-1 Return a number which is graeter then 5

    // const number=[1,2,4,5,3,4,6,7,6,4,3,2,1];
    
    // storefunc=number.find((current,index,arr)=>{

    //         return current>5; //isme pehle 1 se dekhna start kiya aur jab 6 ko dekha to return 6 kar diya kyonki wo pehle 

    // });

    // console.log(storefunc);  //output is 6


        //! using for each loop
             
                //    number.forEach((current)=>{

                //     if(current>5)
                //     {
                //     console.log(+current); //gives output 6 7 6
                //     }

                //    });

                //    //! using a for of loop

                //    for(let item of number)
                //    {
                       
                //    }
                
                // number.forEach(function(current){

                // });  we can also use this traditionl function



    //findIndex---

    let months=[`jan`,`feb`,`march`, `april`, `june`, `july`];

    let number=[1,2,3,4,2,5,8,5,8,0,3];
    
     let callfunc=number.map((current)=>{

     return current*5;
     });
     
        console.log(`your new array after multiplying`+callfunc);

     callfunc.forEach((current,index)=>{

        if
        (current>15)
        {
        console.log(index);   //givs the output 3
                                                5
                                                6
                                                7
                                                8 
        
        } 

     });
     
    //  callfunc.forEach((current)=>{

    //     if(current > 15)
    //     {
    //                 console.log(current);  ///give output of number which greater then 1520
                    // 25
                    // 40
                    // 25
                   // 40
    //     }
    //  });



    // let result=callfunc.findIndex((current,index, arr)=>{
                 
    //     return current>15;

    // });

    // console.log(result); //gives the index where current no is gerater then 5 output is 3

     



