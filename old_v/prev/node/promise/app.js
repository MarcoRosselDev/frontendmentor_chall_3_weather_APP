const condition = false;

const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (condition) {
            resolve("Promesa cumplida!");
        } else {
            reject("Promesa rechazada...");
        }
    }, 3000)
})

function promesaResuelta(value) {
    console.log(value);
};

function promesaRechazada(value) {
    console.log(value);
}

miPromise.then(promesaResuelta, promesaRechazada)