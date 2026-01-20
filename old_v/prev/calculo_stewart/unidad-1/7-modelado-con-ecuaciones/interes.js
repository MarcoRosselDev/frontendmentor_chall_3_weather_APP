/* problemas de interes

maria hereda 100 000 dolares y los invierte en dos certificados de deposito.
uno de los certificados paga 6% y el otro 4.5% de interes simple al agno.

    si el interes total de maria es 5025 dolares al agnio.

---> cuanto dinero se ivierte a cada una de las tasas de interes ?

*/

const herencia = 100000
const gananciaInvercion = 5025

const invA = 0.06
const invB = 0.045

let x = 0;

let y = (herencia - x)


function interes() {
    x = ((invB*(herencia) - gananciaInvercion)) / (invB - invA);
    console.log(`se invirtio ${x} en el fondo A de 6% de interes`);
}

interes() // se invirtio 35000 en el fondo A de 6% de interes

// ahora hacer el ejercicio 25 del libro