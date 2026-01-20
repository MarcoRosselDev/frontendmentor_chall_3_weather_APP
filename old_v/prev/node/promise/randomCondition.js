function pizzaRandom() {
    let exit = Math.random() < 0.8;
    return exit;
}

/* for (let i = 0; i < 10; i++) {
    console.log(pizzaRandom());
} */

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (pizzaRandom()) {
            resolve("La pizza esta lista")
        } else{
            reject("Se quemo la pizza, sorry!")
        }
    }, 2000);
})

myPromise.then((event) =>{
    console.log(event);
}).catch((err) => {
    console.log(err);
});