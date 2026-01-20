function saludar(name) {
    return `buenos dias ${name}`;
}

function saludoHolaMundo() {
    return "hola mundo!";
}

function saludo3(userName) {
    return `${userName} saludo 3`;
}

/* module.exports.x = saludar;
module.exports.y = saludoHolaMundo; */

module.exports = {
    x: saludar,
    y: saludoHolaMundo,
    saludo3: saludo3
}