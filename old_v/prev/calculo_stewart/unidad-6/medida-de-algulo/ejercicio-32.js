// 32   11pi / 6

function coterminalRadian(nominadorRadian, denominadorRadian ,multiplo) {
    const pi = Math.PI;
    const nominador = nominadorRadian + denominadorRadian*2*multiplo;
    const solution = `${nominador} PI / ${denominadorRadian}  radianes`;

    console.log(solution);
}

coterminalRadian(11,6,1) // 23 PI / 6  radianes
coterminalRadian(11,6,2) // 35 PI / 6  radianes
coterminalRadian(11,6,-1) // -1 PI / 6  radianes
coterminalRadian(11,6,-2) // -13 PI / 6  radianes

// mucho mas elegante
