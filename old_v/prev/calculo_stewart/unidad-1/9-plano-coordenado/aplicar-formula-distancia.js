/* Aplicar formula para distancias

cual de los puntos P(1, -2) o Q(8, 9) esta mas cerca al punto A(5, 3)?

*/

function formulaDistancia(xA, yA, xB, yB) {
    const resultado = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2))
    console.log(`la distancia es ${resultado}`);
}

// aplicamos if conditional para ver que punto esta mas cerca.

const AP = formulaDistancia(1, -2, 5, 3)
const AQ = formulaDistancia(8, 9, 5, 3)

if (AP > AQ) {
    console.log('Q esta mas cerca al punto A');
} else {
    console.log('P esta mas cerca al punto A');
}

/* la distancia es 6.4031242374328485
la distancia es 6.708203932499369
P esta mas cerca al punto A */