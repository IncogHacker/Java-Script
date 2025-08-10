
//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.



const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First")
    },2000)


})

const promise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("second")
    },100)//if we write five then it take total 6sec

})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third")
    },1000)

})


//jo sabse kam time lega wo print hojayeg 


Promise.race([promise1, promise2, promise3])

    .then((pass) => {

        console.log(pass);
    })

    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Completeion")
    })