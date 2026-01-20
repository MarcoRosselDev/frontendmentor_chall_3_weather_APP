/* Relaciones Trigonometricas

sen = opuesto/hipotenusa
cos = adyacente/hipotenusa
tan = opuesto/adyacente
csc = hipotenusa/opuesto
sec = hipoetenusa/adyacente
cot = adyacente/opuesto

ejempolo 1          Encuentra ralaciones trigonometricas

Encuentra las sis relaciones trigonometricas del angulo de la figura 3

hipo = 3
adyacente = 5^(1/2)
opuesto = 2

*/

function realcionesTrigonometricas(hipotenusa, opuesto, adyacente) {
    const seno = `${opuesto} / ${hipotenusa}`;
    const coseno = `${adyacente} / ${hipotenusa}`;
    const tangente = `${opuesto} / ${adyacente}`;
    const cosecante = `${hipotenusa} / ${opuesto}`;
    const secante = `${hipotenusa} / ${adyacente}`;
    const cotangente = `${adyacente} / ${opuesto}`;

    console.log(`
    seno = ${seno}
    coseno = ${coseno}
    tangente = ${tangente}
    cosecante = ${cosecante}
    secante = ${secante}
    cotangente = ${cotangente}
    `);
}
const scrt5 = Math.sqrt(5)
console.log(scrt5);
realcionesTrigonometricas(3, 2, scrt5)

/* 
    seno = 2 / 3
    coseno = 2.23606797749979 / 3
    tangente = 2 / 2.23606797749979
    cosecante = 3 / 2
    secante = 3 / 2.23606797749979
    cotangente = 2.23606797749979 / 2
 */

// ahora intente ralizar el ejercicio 3 del libro