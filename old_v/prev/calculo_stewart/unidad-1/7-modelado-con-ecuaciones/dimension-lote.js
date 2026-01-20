/* un lote rectangular para construccion mide 8 pies mas de largo de lo que mide de ancho y tiene un area de 2900 pies cuadrados.

    --> encuentre las dimensiones del lote.

*/

function dimensionesLote(diferenciaLargo, area) {
    
    const resultado = (-diferenciaLargo + (Math.sqrt(Math.pow(diferenciaLargo, 2) - 4 *(- area)))) / 2

    console.log(resultado);
}

dimensionesLote(8, 2900) // 50

// ahora realizar el ejercicio 41 del libro