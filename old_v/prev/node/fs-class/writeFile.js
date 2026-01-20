const fs = require('fs');

fs.writeFile('./node/fs-class/main.html', '<p>este html fue reescrito desde writeFile.js para reemplazar el codigo html</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo reescrito !');
})