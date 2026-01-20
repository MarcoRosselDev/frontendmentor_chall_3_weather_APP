/* una compagnia de renta de autos cobra 30 dolares al dia y 15 centavos por milla para rentar un auto.
    Helen renta un auto durante dos dias  su cuenta llega a 108 dolares. 
    -- cuantas millas recorrio ?

*/

/* constantes de valores de la compagnia */

const dia = 30
const milla = 0.15

/* funcion para calcular solo con una incognita */

const calcularVariablesCompagnia = (dias, millas, totalDolares) => {
    if(dias && millas) {
        const total =  (dia*dias) + (milla*millas);
        return console.log(`el total es ${total}`);
    }

    if (dias && totalDolares) {
        const total = (totalDolares - (dia*dias)) / milla
        return console.log(` se recorrieron ${total} millas`);
    }
    if (millas && totalDolares) {
        const total = ((totalDolares - (millas*milla))/30)
        return console.log(`fueron un total de ${total} dias`);
    }
    // en caso de que no se den mas de una variable devolver error

    if (millas == null && totalDolares == null) {
        console.log('no se puede aplicar mas de una incognita');
    }
}

calcularVariablesCompagnia()
calcularVariablesCompagnia(2,null, 108) 

/* no se puede aplicar mas de una incognita
 se recorrieron 320 millas */