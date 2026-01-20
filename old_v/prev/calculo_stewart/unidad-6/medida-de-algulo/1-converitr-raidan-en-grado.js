/* 

x radian en grados ====> * pi/180
x grados en radian ====> * 180/pi

*/

function gradosRadian(grados) {
    result =  grados * (Math.PI/180)
    console.log(result);
}

gradosRadian(60) // 1.0471975511965976

function radianGrados(radian) {
    result = Math.round(radian * (180/Math.PI))
    console.log(result);
}

radianGrados((Math.PI/6)) // 30

// ahora intenta hacer los ejercicios 5 y 17 del libro