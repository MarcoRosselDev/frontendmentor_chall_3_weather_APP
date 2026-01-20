function buy(item) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (item === "cup") {
                resolve("cup is ready for send.")
            } else {
                reject(`sorry, we've no ${item} !`)
            }
        }, 2000)
    });
};

function processing(event) {
    return new Promise(resolve =>{
        console.log("processing item");
        console.log(`msj from buy function = ${event}`);
        setTimeout(()=>{
            resolve("items processed successful")
        }, 4000)
    })
}

/* buy('cup')
    .then(event =>{
        console.log(event);

        return processing(event)
    })
    .then(event => console.log(event))
    .catch(err => console.log(err))
 */
/* OUTPUT 
cup is ready for send.
processing item
msj from buy function = cup is ready for send.
items processed successful */

async function realizarPedido(producto) {
    try {
        const respuesta = await buy(producto);
        console.log('esto va en orden a pesar de ser asyncrono');
        console.log(respuesta);
        const respuestaProceso = await processing(respuesta);
        console.log('esto va despues de la funcion pocessing');
        console.log(respuestaProceso);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('pen');
realizarPedido('cup');