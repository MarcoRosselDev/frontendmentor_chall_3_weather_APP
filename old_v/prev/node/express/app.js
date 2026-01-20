const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos.js')

// Routers
const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res)=>{
    res.send('my first server with Express !')
});

app.get('/api/cursos', (req, res)=>{
    res.send(infoCursos)
});

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`This server's listening on port ${PUERTO} ... `);
}) 