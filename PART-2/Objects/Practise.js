callcompare = (objA, objb) => {

    let u = Object.entries(objA);
    // console.log(u);
    u.forEach((current, index) => {

        setTimeout(() => {
            console.log(current);
        }, index * 1000);                    ///here we are increasing time with index

    })

    let x = Object.keys(objA); ///return A array Form
    let y = Object.keys(objb);

    // console.log(x);
    // console.log(y);

    if (x.length == y.length) /// Comparing Objects on Basis of length after converting into Array...
    {
        return true;
    }

    else {

        return false;
    }




}


let objA = { Name: "Rishabh Singh", Age: 67, city: "NEw York" };
let objb = { Name: "Riya Singh", Age: 45, city: "Varanais" };
let objc = { Name: "Vishnu Singh", Age: 56, city: "Ghazipur" };



console.log(callcompare(objA, objb));




















