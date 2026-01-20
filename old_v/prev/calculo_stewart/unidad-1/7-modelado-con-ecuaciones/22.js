/* 22 COSTOS DE TELEFONO CELULAR

    Una compgnia de telefonia celular cobra una cuota mensual de 10 dolares por los primeros 1000 mensajes de texto y 10 centavos  por cada mensaje adicional de texto.
    la cuenta de miriam por mensajes de texto para el mes de junio es de 38.5 dolares.
    
    ---> cuantos mensajes de textos envio dicho mes ?

*/

planMensual = 10
precioMensajeExtra = 0.1

function numeroMjsMes(total) {
    resultado = ((total - planMensual) / precioMensajeExtra) + 1000;
    return console.log(`el numero de mensajes de este mes fue de ${resultado}`);
}

numeroMjsMes(38.5) // el numero de mensajes de este mes fue de 1285 <-------- solucion
numeroMjsMes(49.5) // el numero de mensajes de este mes fue de 1395 <--- test

