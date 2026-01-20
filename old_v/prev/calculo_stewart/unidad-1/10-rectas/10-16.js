/* pendiente ejercicio 10, 11, 12, 13, 14, 15, 16

    encuentre la pendiente de la recta que pasa por P y Q

*/
function pendiente(x1, y1, x2, y2) {
    const elevacion = y2 - y1;
    const recorrido = x2 - x1;

    const pendienteRecta =  elevacion/recorrido

    console.log(`la pendiente de la recta que pasa por los puntos P(${x1}, ${y1}) y Q(${x2}, ${y2}) es ${pendienteRecta}`);
}

// 10-------- P(0,0), Q(3, -1)
pendiente(0, 0, 3, -1) // (0, 0) y Q(3, -1) es -0.3333333333333333

// 11---------P(2, -2), Q(7, -1)
pendiente(2, -2, 7, -1) // la pendiente de la recta que pasa por los puntos P(2, -2) y Q(7, -1) es 0.2

// 12---------P(-5, 1), Q(3, -2)
pendiente(-5, 1, 3, -2) // la pendiente de la recta que pasa por los puntos P(-5, 1) y Q(3, -2) es -0.375

// 13---------P(5, 4), Q(0, 4)
pendiente(5, 4, 0, 4) // la pendiente de la recta que pasa por los puntos P(5, 4) y Q(0, 4) es 0

// 14---------P(4, 3), Q(1, -1)
pendiente(4, 3, 1, -1) // la pendiente de la recta que pasa por los puntos P(4, 3) y Q(1, -1) es 1.3333333333333333

// 15---------P(10, -2), Q(6, -5)
pendiente(10, -2, 6, -5) // la pendiente de la recta que pasa por los puntos P(10, -2) y Q(6, -5) es 0.75

// 16---------P(3, -2), Q(6, -2)
pendiente(3, -2, 6, -2) // la pendiente de la recta que pasa por los puntos P(3, -2) y Q(6, -2) es 0