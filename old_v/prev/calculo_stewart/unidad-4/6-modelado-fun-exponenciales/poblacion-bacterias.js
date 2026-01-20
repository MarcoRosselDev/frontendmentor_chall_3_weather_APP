/* Poblacion de bacterias

bajo condiciones ideales cierta poblacion de bacterias se duplica cada tres horas. 
Inicialmente hay 1 000 en una colonia.

a-  Encuentre un modelo para la poblacion de bacterias despues de t horas
b-  cuantas bacterias hay en la colonia despues de 15 horas ?
c-  cuando llegara a 100 000 el numero de bacterias ?

*/

//a=         n(t) = 1000 * 2^(t/3)

function poblacionBacterias(tiempo) {
    const solution = 1000*Math.pow(2, (tiempo/3))

    console.log(`la poblacion es de ${solution} en ${tiempo} horas`);
}

poblacionBacterias(15)
//la poblacion es de 32000 en 15 horas
