/* Poblacion conejos

Cierta clase de conejos fue introducida en una peque;a isla hace 8 meses .
La poblacion actual de conejos en la isla se estima en 4100 y se duplica cada 3 meses.

a   cual fue el tama;o inicial de la poblacion de conejos?
b   estime la poblacion a un a;o despues de que los conejos fueron introducidos en la isla

*/

function poblacionConejos(poblacion8Meses) {
    const conejosInicial = Math.round(poblacion8Meses/(Math.pow(2, 8/3)))
    const poblacionEnUnAgnio = Math.round(conejosInicial*Math.pow(2, 12/3))
    
    console.log(`la poblacion inicial el ${conejosInicial} y en un agnio se esperan ${poblacionEnUnAgnio} conejos`);
}

poblacionConejos(4100)
// la poblacion inicial el 646 y en un agnio se esperan 10336 conejos

// ahora intente hacer el ejercicio 5 del libro
