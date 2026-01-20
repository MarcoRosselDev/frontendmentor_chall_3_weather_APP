// Determinar la altura de un edificio usando triangulos semejantes

/*  Un hombre mide 6 pies de estatura desea determinar la altura de cierto edificio de cuatro pisos.
    Mide la sombra de la construicccion y encuentra que es de 28 pies de largo,
    mientras que su propia sombra es de 3.5 pies de largo.

    --> cual es la altura del edificio.
    por tanto sea que       h = la altura del edificio

    h               ==>  altura desconosida edificio 
    28 pies         ==>  sombra edificio 

    6 pies          ==> altura hombre
    3.5 pies        ==> sombra hombre

    h/28 = 6/3.5

*/

function altura(sombraA, sombraB, alturaB ) {
    
    const alturaA = (alturaB * sombraA) / sombraB;

    console.log(`la altura del edificio es ${alturaA} pies`);

}

altura(28, 3.5, 6) // la altura del edificio es 48 pies

// ahora intente ralizar el ejercicio 53 del libro