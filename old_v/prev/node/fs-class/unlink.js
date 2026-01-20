const fs = require('fs');

fs.unlink('./node/fs-class/main.html', (err)=>{
    if (err) {
        throw err;
    }
    console.log('archivo eliminado exitosamente!');
})

// todas estos metodos son asincronos, por lo que si queremos que se ejecuten en sierto
// orden devemos usar su vercion sincrona como fs.unlinkSync('url', function)