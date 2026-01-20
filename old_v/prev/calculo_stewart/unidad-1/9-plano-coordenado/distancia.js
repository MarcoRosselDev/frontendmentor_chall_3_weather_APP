/* Las formulas para distancia y punto medio

    ahora encontramos una formula para la distancia d(A, B) entre dos puntos A(x1, y1) y B(x2, y2) del planol
    Recuerde de la seccion 1.1 que la distancia entre lso puntos a y b en una recta numerica es d(a, b) = | b - a |,
    Entonces, de la fugura 4, vemos que la distancia entre los puntos A(x1, y1) y C(x2, y1) sobre una reacta horizontal debe ser
    | x2 - y1 |, y la distancia entre B(x2, y2) y C(x2, y1) sobre una recta vertical debe ser | y2 - y1 | 


    Figura 4
    y                        B (x2, y2)
    |                      / | 
    |                   /    |  
    |                /       |  y2 - y1
    |             /          |  
    | A(x1, y1) <____________| C (x2, y1)
    |           \---x2 - x1--\
    |____________________________x

*/

function formulaDistancia(xA, yA, xB, yB) {
    const resultado = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2))
    console.log(`la distancia es ${resultado}`);
}

formulaDistancia(1, -2, 5,3) // la distancia es 6.4031242374328485
