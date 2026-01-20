/* 5        Encuentre los valores exactos de los seis realciones trigonometricas del angulo en el triangulo.

hipotenusa = 41
adyacente = x
opuesto = 40

*/

function realcionesTrigonometricas(hipotenusa, opuesto, adyacente) {
    const seno = opuesto/hipotenusa;
    const coseno = adyacente/hipotenusa;
    const tangente = opuesto/adyacente;
    const cosecante = hipotenusa/opuesto;
    const secante = hipotenusa/adyacente;
    const cotangente = adyacente/opuesto;

    console.log(`
    seno = ${seno}
    coseno = ${coseno}
    tangente = ${tangente}
    cosecante = ${cosecante}
    secante = ${secante}
    cotangente = ${cotangente}
    `);
}

realcionesTrigonometricas(41,40, 9)

/* 
    seno = 0.975609756097561
    coseno = 0.21951219512195122
    tangente = 4.444444444444445
    cosecante = 1.025
    secante = 4.555555555555555
    cotangente = 0.225
*/