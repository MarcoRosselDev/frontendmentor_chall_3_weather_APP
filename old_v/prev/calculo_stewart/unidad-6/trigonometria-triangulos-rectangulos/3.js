/* 3    Encuentre los valores exactos de las seis ralciones trigonometricas del angulo en el triangulo.

hipotenusa = 5 
adyacente = 3
opuesto = 4 

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

realcionesTrigonometricas(5, 4, 3)
/* 
    seno = 0.8
    coseno = 0.6
    tangente = 1.3333333333333333
    cosecante = 1.25
    secante = 1.6666666666666667
    cotangente = 0.75
*/