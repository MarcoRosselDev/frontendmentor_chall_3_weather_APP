/* 53-  Longitud de una sombra

    un hombre se aleja de un poste de alumbrado cuya fuente de luz esta a 6 m sobre el suel.
    El hombre mide 2 m de  alto.

    --> cual es la longitud de la sombra del hombre cuando ese se halla a 10 m del poste ?


*/

function sombra(alturaA, alturaB, distancia) {
    
    const resultado = (alturaB * distancia) / (alturaA - alturaB) ;

    console.log(`la sombra proyectada del hombre es de ${resultado} metros`);

}

sombra(6, 2, 10) // la sombra proyectada del hombre es de 5 metros