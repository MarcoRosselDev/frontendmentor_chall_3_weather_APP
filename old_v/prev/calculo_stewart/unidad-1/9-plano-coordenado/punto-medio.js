// formula punto medio en forma de funcion

function puntoMedio(x1, y1, x2, y2) {
    
    const puntoMedioX = (x1 + x2)/2
    const puntoMedioY = (y1 + y2)/2

    console.log(`el punto medio de los puntos A(${x1}, ${y1}) y B(${x2}, ${y2}) es (${puntoMedioX}, ${puntoMedioY})`);

}

puntoMedio(1,2,5,9) // el punto medio de los puntos A(1, 2) y B(5, 9) es (3, 5.5)