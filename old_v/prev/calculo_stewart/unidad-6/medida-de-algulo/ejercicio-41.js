// 41   Encontrar un angulo entre 0 y 360 que sea coterminal con el angulo dado.

// 400 grados

function moduloCoterminal(angulo) {
    resultado = angulo % 360;
    console.log(resultado);
}


moduloCoterminal(400) // 40