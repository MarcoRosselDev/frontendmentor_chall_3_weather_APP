function coterminalAngulo(angulo, multiplo) {
    respuesta = angulo + 360*multiplo;
    console.log(respuesta);
}

// 30   135 grados

coterminalAngulo(135, 1) // 495
coterminalAngulo(135, 2) // 855
coterminalAngulo(135, -1) // -225
coterminalAngulo(135, -2) // -585
