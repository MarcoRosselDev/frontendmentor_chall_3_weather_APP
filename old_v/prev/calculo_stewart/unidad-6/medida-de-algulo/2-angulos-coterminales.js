/* dos angulso en posicion estandar son conterminales si sus lado scoinciden.

angulos:
    sumamos cualquier multiplo de 360.

radianes:
    sumamos cualquier multiplo de 2pi.

*/

function coterminalAngulo(angulo, multiplo) {
    respuesta = angulo + 360*multiplo;
    console.log(respuesta);
}

coterminalAngulo(30, 2) // 750
coterminalAngulo(30, 3) // 1110
coterminalAngulo(30, -2) // -690
coterminalAngulo(30, -3) // -1050

function coterminalRadian(nominadorRadian, denominadorRadian ,multiplo) {
    const pi = Math.PI;
    const nominador = nominadorRadian + denominadorRadian*2*multiplo;
    const solution = `${nominador} PI / ${denominadorRadian}  radianes`;

    console.log(solution);
}

coterminalRadian(1, 3, 1) // 7 PI / 3  radianes
coterminalRadian(1, 3, 2) // 13 PI / 3  radianes
coterminalRadian(1, 3, -1) // -5 PI / 3  radianes
coterminalRadian(1, 3, -2) // -11 PI / 3  radianes

// ahora intenta realizar los ejercicios 29 y 31