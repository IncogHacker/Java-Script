// Using Promise.all-- method Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First ")
    }, 1000)

})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second ")
    }, 2000)                               //Total count of seconds 6seconds  so run after 6sec then total data show

})
const promise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Third ")
    }, 3000)


})

Promise.all([promise1, promise2, promise3])
    .then((values) => {

        console.log(`Here We get all the resolve promises if any error does not give next promise value \n ${values}`)//this convert in string tempelate literal

        console.log(values)//this return in form of array

    })
    .catch((error) => {
        console.log(`error ${error}`);
    })


