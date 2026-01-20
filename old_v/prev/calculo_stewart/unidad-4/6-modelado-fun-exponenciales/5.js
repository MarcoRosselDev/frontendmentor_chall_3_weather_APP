/* 5    poblacion de zorros

la polbacion de zorros en cierta region tiene una razon de crecimiento relativo de 8% por a;o.
se estima que la pblacion en 2013 era de 18 000

a   encuentre una funcion n(t) = n0e^(r*t) que modele la pblacion en t a;os despues de 2013.
b   use la funcion del inciso b para estimar la poblacion de zorros en el a;o 2021.
c   despues de cuantos a;os la poblacion de zorros sera de 25 000 ? 

*/

const poblacion2013 = 18000

function poblacionZorros(porcentajeCrecimiento, agnios) {
    const solution = Math.round(poblacion2013*Math.pow(Math.E, porcentajeCrecimiento*agnios))

    console.log(`la poblacion a un crecimiento de ${porcentajeCrecimiento*100} % por agnio en 2021 sera de ${solution} zorros.`);
}

poblacionZorros(0.08, 8)
// la poblacion a un crecimiento de 8 % por agnio en 2021 sera de 34137 zorros.