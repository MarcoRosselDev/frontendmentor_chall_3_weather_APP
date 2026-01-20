const express = require('express')
const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos;

// Matematicas
routerMatematicas.get('/', (req, res) =>{
    res.send(matematicas)
})

// cursos de matematicas por nombre
routerMatematicas.get('/:tema', (req, res) => {
    const temas = req.params.tema;
    const resultados = matematicas.filter(tema => tema.tema === temas);

    if (resultados === 0) {
        return res.status(404).send(`No se encontraron cursos con el nombre ${temas}`);
    }
    res.send(JSON.stringify(resultados))
})

// tema and materia at the same time
routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const temas = req.params.tema;
    const nivel = req.params.nivel;

    const resultado = matematicas.filter(curso => curso.tema === temas && curso.nivel === nivel);

    if (resultado == 0) {
        return res.status(404).send(`no se encontraron cursos de ${temas} y de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultado));
})

module.exports = routerMatematicas;
