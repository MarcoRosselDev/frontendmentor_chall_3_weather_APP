const fs = require('fs');

fs.appendFile('./node/fs-class/main.html', '<h1>hola !</h1>', (err) =>{
    if (err) {
        throw err;
    }
    console.log('appendFile successful!');
})