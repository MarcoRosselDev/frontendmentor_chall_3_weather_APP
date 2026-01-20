/* encuentre la medida en radianes del angulo con la medida dada en grados.
    Redondee su respuesta a tres decimales.

    5-   15 grados
    6-   36 grados
    7-   54 grados
    8-   75 grados
    9-   -45 grados
    10-   -30 grados
    11-   100 grados
    12-   200 grados
    13-   1000 grados
    14-   3600 grados
    15-   -70 grados
    16-   -150 grados

*/

function gradosRadian(grados) {
    result =  grados * (Math.PI/180)
    console.log(result);
}

//              resultado               n ejericico
gradosRadian(15) // 0.2617993877991494  5
gradosRadian(36) // 0.6283185307179586  6
gradosRadian(54) // 0.9424777960769379  7
gradosRadian(75) // 1.3089969389957472  8
gradosRadian(-45) // -0.7853981633974483    9
gradosRadian(-30) // -0.5235987755982988    10
gradosRadian(100) // 1.7453292519943295     11
gradosRadian(200) // 3.490658503988659      12
gradosRadian(1000) // 17.453292519943297    13
gradosRadian(3600) // 62.83185307179586     14
gradosRadian(-70) // -1.2217304763960306    15
gradosRadian(-150) // -2.6179938779914944   16
