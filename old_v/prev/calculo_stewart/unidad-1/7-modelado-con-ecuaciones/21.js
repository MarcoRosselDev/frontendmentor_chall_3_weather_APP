/* 21 - RENTA DE UN CAMION

    Una compagnia que renta vehiculos cobra 65 dolares al dia y 20 centavos por milla por rentar un camion.
    Miguel rento un camion durante 3 dias y su cuenta fue de 275 dolares.

    -- cuantas millas recorrio ?
*/

// aplicamos la funcion del ejempolo y reasignamos los valores fijos de la compagnia -->


const dia = 65
const milla = 0.20

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

calcularVariablesCompagnia() // no se puede aplicar mas de una incognita
calcularVariablesCompagnia(3,null, 275) // se recorrieron 400 millas