/*  63  Compartir un trabajo

    candy y tim comparten una ruta para vender periodicos.
    candy tarda 70 minutos en entregar todos los periodicos.
    tim tarda 80 minutos 

    --> cuanto tiempo les toma a los dos cuando trabajan juntos ?

*/

function trabajoEquipo(trabajadorA, trabajadorB) {
    
    resultado = (trabajadorA*trabajadorB)/(trabajadorB + trabajadorA)

    if (resultado % 1 == 0) {
        console.log(`el trabajo en conjunto se realiza en ${resultado} minutos`);
    } else {
        console.log(`el trabajo en conjunto se raliza en ${Math.round(resultado)} minutos con ${Math.round((resultado % 1) * 60)} segundos`);
    }

}

trabajoEquipo(70, 80) // el trabajo en conjunto se raliza en 37 minutos con 20 segundos