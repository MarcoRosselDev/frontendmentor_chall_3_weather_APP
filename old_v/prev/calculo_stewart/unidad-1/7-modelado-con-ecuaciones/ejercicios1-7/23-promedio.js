/* 23   Promedio

    Linh ha obtenido calificaciones de 82, 75 y 71 en sus examenes de algebra de mitad de periodo.
    si el examen final cuenta el doble que el de la mitad del periodo.

    --> que calificacion debe tener en su examen final para obrener una calificacion promedio de 80?
        (suponga que la maxima calificacion posible en cada prueba es de 100)

*/

function promedioNotas(notaA, notaB, notaC, promedioEsperado) {
    resultado = ((promedioEsperado * 5) - (notaA + notaB + notaC )) /2;

    console.log(`la nota requerida para obtener un ${promedioEsperado} como promedio es de ${resultado}`);
}

promedioNotas(82, 75, 71, 80) // la nota requerida para obtener un 80 como promedio es de 86
promedioNotas(82,75, 71, 75 ) // la nota requerida para obtener un 75 como promedio es de 73.5