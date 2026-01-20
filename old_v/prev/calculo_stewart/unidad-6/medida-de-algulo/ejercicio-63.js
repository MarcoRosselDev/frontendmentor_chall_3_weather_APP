/*  63      Encuentre el area del sector mostrado en cada figura.

a   80 grados       8  radio
b   0.5 radianes    10 radio

*/

function areaSector(grados, radio, radianes) {
    if (grados) {
        const gradosRadian = grados*Math.PI / 180;
        respuesta = 0.5 * radio*radio * gradosRadian
        console.log(`${respuesta} grados ^2`);
    }
    if (radianes) {
        respuesta = 0.5 * radio*radio * radianes;
        console.log(`${respuesta} grados`);
    }
}

areaSector(80, 8, null) // 44.680428851054835 grados ^2
areaSector(null, 10, 0.5) // 25 grados