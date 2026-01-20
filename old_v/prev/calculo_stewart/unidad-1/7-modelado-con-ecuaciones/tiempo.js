/* Problemas de tiempo necesario para realizar un trabajo

    debido a una fuerte tormenta anticipada el nivel del agua en un estanque debe descender 1 pie.
    Abrir el vertedero A hace que el nivel descienda en 4 horas, mientras que abrir el vertedero mas peque;o B hace que el nivel del agua descienda en 6 horas.

    --> cuanto tardara en bajar 1 pie el nivel del agua con ambos vertederos abiertos ?

    A = 1/4
    B = 1/6

    --- si los dos trabajan juntos = 1/x

*/

function trabajoEquipo(trabajadorA, trabajadorB) {
    
    resultado = (trabajadorA*trabajadorB)/(trabajadorB + trabajadorA)

    if (resultado % 1 == 0) {
        console.log(`el trabajo en conjunto se realiza en ${resultado} horas`);
    } else {
        console.log(`el trabajo en conjunto se raliza en ${Math.round(resultado)} horas con ${Math.round((resultado % 1) * 60)} minutos`);
    }

}

trabajoEquipo(4, 6) // el trabajo en conjunto se raliza en 2 horas con 24 minutos

// ahora intente ralizar el ejercicio 63