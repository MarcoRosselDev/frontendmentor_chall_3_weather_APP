/* 4        Encuentre los valores exactos de los seis realciones trigonometricas del angulo en el triangulo.

hipotenusa = 25
adyacente = 24
opuesto = 7

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

realcionesTrigonometricas(25, 7,24)

/* 
    seno = 0.28
    coseno = 0.96
    tangente = 0.2916666666666667
    cosecante = 3.5714285714285716
    secante = 1.0416666666666667
    cotangente = 3.4285714285714284
    
*/