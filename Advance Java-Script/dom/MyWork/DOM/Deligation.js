
// here basically without giving every one event just only give to the parent Element So we can control every child

let callfunc = (event) => {

    let store = event.target;
    // console.log(store.textContent);

    store.style.transform="rotateX(360deg)";

   setTimeout(() => {
            store.style.transform ="rotateY(0deg)";
        }, 300);


document.querySelector(".hd").innerText = `You fav programming language is: ${store.textContent}`



}
 document.querySelector(".Main").addEventListener("click", callfunc)
