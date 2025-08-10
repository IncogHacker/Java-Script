//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First")
    },1000)


})

const promise2 = new Promise((reolve, reject) => {

    setTimeout(() => {
        reject("Error")
    },5000)//if we write five then it take total 6sec

})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third")
    },1000)

})



Promise.allSettled([promise1, promise2, promise3])

    .then((pass) => {

        console.log(pass);
    })

    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Completeion")
    })

///!output is
// [
//   { status: 'fulfilled', value: 'First' },
//   { status: 'rejected', reason: 'Error' },
//   { status: 'fulfilled', value: 'Third' }
// ]
// Completeion
