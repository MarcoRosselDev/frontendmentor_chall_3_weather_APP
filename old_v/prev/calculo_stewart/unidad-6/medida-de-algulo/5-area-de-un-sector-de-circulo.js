/* Area de un sector circular

A = (1/2)* radio^2 * angulo

en algulo tiene que estar en radianes, si no no sitve la formula.
reminder- formula para convertir grados en radianes
    grados a radianes =    grados* PI/180
    radianes a grados =    radianes*180/PI

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

areaSector(60, 3,null) // 4.71238898038469 grados ^2

// yo creo que se puede devolver algo mas limpio 
// algo como una respuesta fraccionaria con PI radianes.

// ahora hacer el ejercicio 63 del libro.