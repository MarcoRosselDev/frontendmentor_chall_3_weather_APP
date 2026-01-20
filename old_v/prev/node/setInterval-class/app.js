function sumar() {

    a = Math.random() * 2
    b = Math.random() * 10
    console.log(Math.round(a + b));
}

setInterval(sumar, 1500)