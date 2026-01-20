/* 6        Encuentre los valores exactos de los seis realciones trigonometricas del angulo en el triangulo.

hipotenusa = 17
adyacente = 8
opuesto = 15

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

realcionesTrigonometricas(17, 15,8)

/* 
    seno = 0.8823529411764706
    coseno = 0.47058823529411764
    tangente = 1.875
    cosecante = 1.1333333333333333
    secante = 2.125
    cotangente = 0.5333333333333333
*/