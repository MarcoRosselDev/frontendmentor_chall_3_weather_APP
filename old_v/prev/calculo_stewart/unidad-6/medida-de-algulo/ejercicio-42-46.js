function moduloCoterminal(angulo) {
    resultado = angulo % 360;
    if (resultado < 0) {
        console.log(resultado + 360);
    } else {
        console.log(resultado);
    }
}

// 42       375 grados
moduloCoterminal(375) // 15 grados
// 43       780 grados
moduloCoterminal(780) // 60 grados
// 44      -100 grados
moduloCoterminal(-100) // 260 grados
// 45      -800 grados
moduloCoterminal(-800) // 280 grados
// 46       1270 grados
moduloCoterminal(1270) // 190 grados 
