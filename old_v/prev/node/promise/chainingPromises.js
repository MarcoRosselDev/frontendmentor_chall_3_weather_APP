function ordernar(item) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (item === 'taza') {
                resolve("Se esta prosesando su producto...")
            } else {
                reject(`no quedan "${item}"`)
            }
        }, 2000)
    })
}

function enviar(mesaje) {
    return new Promise(resolve => {
        console.log(mesaje);
        setTimeout(()=>{
            resolve(`Su pedido esta en camino !`)
        }, 4000)
    })
}

ordernar('taza')
    .then(response => {
        console.log(`${response} first then`);
        return enviar(response);
    })
    .then(value => console.log(value))