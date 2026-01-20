const fs = require('fs');

fs.rename('./node/fs-class/index.html', './node/fs-class/main.html', (err) =>{
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente !');
})