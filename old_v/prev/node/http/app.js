const { log } = require('console');
const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('solicitud nueva');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end("Hola mundoooooo!")
});

servidor.listen(3000, ()=>{
    console.log("El servidor esta escuchando...");
})