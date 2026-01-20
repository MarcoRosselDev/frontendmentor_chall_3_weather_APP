// 31   3pi/4 

function coterminalRadian(radian, multiplo) {
    respuesta = radian + 2*Math.PI*multiplo;
    console.log(`${respuesta} radianes`);
}

coterminalRadian((3*Math.PI/4), 1) // 8.63937979737193 radianes
coterminalRadian((3*Math.PI/4), 2) // 14.922565104551516 radianes
coterminalRadian((3*Math.PI/4), -1) // -3.9269908169872414 radianes
coterminalRadian((3*Math.PI/4), -2) // -10.210176124166829 radianes

// nesecitamos mostrar esto como fracciones...