/* 41-  dimencion de un jardin

    un jardin rectangular mide 10 pies mas de largo que de ancho. su area es 875 pies cuadrados

    --->    cules son sus dimensiones ?

*/

function dimensionesLote(diferenciaLargo, area) {
    
    const resultado = (-diferenciaLargo + (Math.sqrt(Math.pow(diferenciaLargo, 2) - 4 *(- area)))) / 2

    console.log(`las dimensiones son ${resultado} por ${resultado + diferenciaLargo} pulgadas`);
}

dimensionesLote(10, 875)// las dimensiones son 25 por 35 pulgadas