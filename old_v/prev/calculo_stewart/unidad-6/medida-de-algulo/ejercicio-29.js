/* se da la medida de un angulo en posicion estandar.
Encuantra dos angulos positivos y dos angulos negativos que sean coterminales con el angulo dado.

*/

function coterminalRadian(radian, multiplo) {
    respuesta = radian + 2*Math.PI*multiplo;
    console.log(`${respuesta} radianes`);
}

function coterminalAngulo(angulo, multiplo) {
    respuesta = angulo + 360*multiplo;
    console.log(respuesta);
}

// 29       50 grados
coterminalAngulo(50, 1) // 410
coterminalAngulo(50, 2) // 770
coterminalAngulo(50, 3) // 1130
coterminalAngulo(50, -1) // -310
coterminalAngulo(50, -2) // -670
coterminalAngulo(50, -3) // -1030