const fs = require('fs');

fs.readFile('./node/fs-class/index.html','utf-8', (err, contenido) => {
    if (err) {
        //throw err; //--------> detiene el programa, throw = lanzar/tirar.
        console.log(err);
    } else{
        console.log(contenido);
    }

    console.log('mesage...');
});

/* output:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>testing html to read with fs</h1>
</body>
</html> 

*/