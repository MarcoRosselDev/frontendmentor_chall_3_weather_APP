/* 69   Distancia, rapidez y tiempo

    Wendy hizo un viaje de Davenport a Omaha, una distancia de 300 millas.
    Parte del trayecto lo hizo en autobus, que llego a la estacion de ferrocarril justo a tiempo para que completara su viaje en tren.
    El autobus promedio 40 mi/h y el tren promedio 60mi/h.
    Todo el viaje tomo 5:30 horas

    ---> cuanto tiempo viajo Wendy en tren ?

*/

function wendy(velocidadBus, velocidadTren, millasViaje, horasViaje) {
    
    const resultado = -((millasViaje - velocidadTren*horasViaje)/-(velocidadBus - velocidadTren))

    const horasBus = resultado;
    const horasTren = horasViaje - resultado

    console.log(`Wendy viajo en tren ${horasTren} horas`);
}

wendy(40, 60, 300, 5.5) // Wendy viajo en tren 4 horas