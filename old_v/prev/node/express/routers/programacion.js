const express = require('express')
const routerProgramacion = express.Router();
const programacion = require('../datos/cursos.js').infoCursos;

// Programacion
routerProgramacion.get('/', (req, res) =>{
    res.send(programacion)
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);
    
    if (resultado.length === 0 ) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    
    res.send(JSON.stringify(resultado))
    
})

module.exports = routerProgramacion;