/* 24   Promedio

    en una clase de 25 alumnos la calificacion promedio es 84.
    seis estudiantes de la clase obtuvieron una calificacion maxima de 100.
    y tres estudiantes recibieron una clificacion de 60 

    --> cual es el primedio de calificaciones del resto de los estuduantes ?

*/

function notaPromedioAlumnosFaltantes(notasA, cantidadA, notasB, cantidadB, totalAlumnos, promedioNotas) {
    
    const alumnos = totalAlumnos - cantidadA - cantidadB;
    console.log(alumnos);

    const resultado = ((totalAlumnos*promedioNotas) - (notasA*cantidadA) - (notasB*cantidadB)) / alumnos

    console.log(`la nota promedio de los alumnos faltantes es ${resultado}`);

}

notaPromedioAlumnosFaltantes(100, 6, 60, 3, 25, 84) // la nota promedio de los alumnos faltantes es 82.5