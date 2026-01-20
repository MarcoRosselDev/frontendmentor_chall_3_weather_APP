const pizza = true;

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (pizza) {
            resolve("La pizza esta lista para servir");
        } else {
            reject("Lo sentimos se quemo la pizza!");
        }
    }, 3000)
});

const resolvePizza = (event) => {
    console.log(event);
};

const rejectPizza = (event) =>{
    console.log(event);
};

myPromise.then(resolvePizza, rejectPizza);
