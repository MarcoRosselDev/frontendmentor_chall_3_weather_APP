/* 55 Problema de mezclas

    que cantidad de una solucion acida al 60 % debe mezclarse con una solucion al 30% para producir 300ml de una solucion al 50% ?

*/

function mezclas(porcentajeA, porcentajeB, cantidad, porcentajeFinal) {
    
    resultado = ((cantidad * porcentajeFinal) - (porcentajeB * cantidad)) / (porcentajeA - porcentajeB);

    console.log(`la cantidad de 60 % de acides es ${resultado} ml para que los 300 ml finales tengan un 50% de acidez`);
}

mezclas(0.6, 0.3, 300, 0.5 ) // la cantidad de 60 % de acides es 200 ml para que los 300 ml finales tengan un 50% de acidez