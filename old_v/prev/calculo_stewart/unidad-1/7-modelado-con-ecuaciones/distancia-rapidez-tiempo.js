/* Problemas de distancia, rapidez y tiempo

    Un jet volo de nueva york a los angeles una distancia de 4200 kilometros.
    la rapidez para el viaje de regreso fue de 100km/hora mas rapido que la rapidez en el vuelo de ida.
    si el viaje total duro 13 horas.

    ---> cual fue la rapidez del jet de nueva york a los angeles ? 

*/

function distanciaRapidezTiempo(distanciaViaje, rapidezExtra, horasViaje) {
    
    const a = horasViaje;
    const b = (horasViaje * rapidezExtra) - (distanciaViaje * 2);
    const c = -distanciaViaje * rapidezExtra;

    
    console.log(a, b,c);
    const discriminante = Math.sqrt((Math.pow(b, 2)) - (4*a*c));
    console.log(discriminante);

    const resultado = (-b + discriminante )/(2*a)

    console.log(`la rapidez del jet de Nueva York a Los Angeles fue de ${resultado} Km/h`);
}

distanciaRapidezTiempo(4200, 100, 13) // la rapidez del jet de Nueva York a Los Angeles fue de 600 Km/h

// ahora intente realizar el ejericicio 69
