/* Encuentra un angulo con medida entre 0 y 360 grados que sea coterminal con el angulo de medida 1 290 en posicion estandar.

solution:
    podemos restar 360 a 1290 las veces que sea necesario asta dar con el sobrante o modulo.
    para hacerlo mas eficiente dividimos por x veces que se pueda y el modulo sera el angulo buscado
*/

function moduloCoterminal(angulo) {
    resultado = angulo % 360;
    console.log(resultado);
}

moduloCoterminal(1290) // 210

// realizar el ejericio 41 del libro