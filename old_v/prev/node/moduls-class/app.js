const saludos = require("./saludos")

console.log(saludos.x('marco !'));
console.log(saludos.y()); // -----> podemos pasar varias funciones a la vez

console.log(saludos.saludo3('marcus'));