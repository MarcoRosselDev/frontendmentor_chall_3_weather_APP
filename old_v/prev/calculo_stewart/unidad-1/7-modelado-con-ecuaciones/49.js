/* 49   ENMARCAR UNA PINTURA

    Ali pinta con acuarela en una hoja de papel de 20 pulgadas de ancho por 15 pulgadas de alto.
    Luego le coloca a esta hoja un marco de carton de modo que alredeedor de la pintura queda una franja de carton de ancho uniforme.
    el perimetro del marco de carton es de 102 pulgadas 

    --> cual es el ancho de la franja del marco de carton que se ve alrededeor de la pintura ?

*/

/* el perimetro es de 102

-- 2 x a + 2 x b = 102
*/

function marcoPintura(perimetro, altoPintura, anchoPintura) {
    
    const anchoCuadro = (-((2 * altoPintura) + (2 * anchoPintura) - perimetro) / 8)

    console.log(`el ancho del marco del la pintura es de ${anchoCuadro} pulgadas`);

}

marcoPintura(102, 15, 20) // el ancho del marco del la pintura es de 4 pulgadas