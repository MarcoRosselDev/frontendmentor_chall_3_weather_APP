/* 25   INVERSIONES

Phyllis invirtion 12 000 dolares, una parte de los cuales gana una tasa de interes simple de 4.5% al agnio y el resto gana una tasa de 4%.
despues de 1 agnio el interes total ganado sobre estas inversiones fue de 525 dolares.

---> cuanto dinero invirtio a cada una de las tasas ?

*/

const invercion = 12000
const gananciaInvercion = 525

const invA = 0.045
const invB = 0.04

let x = 0;

let y = (invercion - x)


function interes() {
    x = ((invB*(invercion) - gananciaInvercion)) / (invB - invA);
    y = Math.round(invercion - x)
    
    
    console.log(`se invirtio ${Math.round(x)} en el fondo A de 4.5% de interes y ${y} en el fondo de 4%`);
}

interes()
//se invirtio 9000 en el fondo A de 4.5% de interes y 3000 en el fondo de 4%
