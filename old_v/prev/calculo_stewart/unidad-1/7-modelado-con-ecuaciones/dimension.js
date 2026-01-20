/* un jardin cuadrado tiene un andador de 3 pies de ancho alrededor de su borde exterior.
si el area de todo el jardin, incluyendo los andadores, es de 18 000 pies cuadrados.

    ---> cuales son las dimensiones del area plantada ?

*/

function areaJardin(areaTotal, anchoAndador) {

    const jardin =  Math.round(Math.sqrt(areaTotal) - anchoAndador*2)

    console.log(jardin);
}

areaJardin(18000, 3) // 128

// ahora realizar el ejercicio 49 del libro