/* 9    Pendiente

    Encuentre la pendiente de la recta que pasa por P y Q

    P(-1, 2)
    Q(0,0)

*/

function pendiente(x1, y1, x2, y2) {
    const elevacion = y2 - y1;
    const recorrido = x2 - x1;

    const pendienteRecta =  elevacion/recorrido

    console.log(`la pendiente de la recta que pasa por los puntos P(${x1}, ${y1}) y Q(${x2}, ${y2}) es ${pendienteRecta}`);
}

pendiente(-1, 2, 0, 0) // la pendiente de la recta que pasa por los puntos P(-1, 2) y Q(0, 0) es -2
