/* la pendiente m de una reta no vertical que pasa por los puntos A(x1, y1) y B(x2, y2) es

    m = elevacion/recorrido = (y2 - y1)/(x2 - x1)

*/

// determina la pendiente de la recta que pasa por los puntos P(2, 1) y Q(8, 5)


function pendiente(x1, y1, x2, y2) {
    const elevacion = y2 - y1;
    const recorrido = x2 - x1;

    const pendienteRecta =  elevacion/recorrido

    console.log(`la pendiente de la recta que pasa por los puntos P(${x1}, ${y1}) y Q(${x2}, ${y2}) es ${pendienteRecta}`);
}

pendiente(2, 1, 8, 5) // (2, 1) y Q(8, 5) es 0.6666666666666666

// esto quiere decir que por cada unidad que nos movemos en x, se elevara 0.666 en el eje y

// intenta realizar el ejercicio 9 del libro