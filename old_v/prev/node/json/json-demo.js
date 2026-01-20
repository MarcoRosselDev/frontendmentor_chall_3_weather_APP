let infoClass = {
    "titulo": "Node.js course",
    "numVisitas": 16549,
    "numLinkes": 82,
    "temas": [
        "javaScript",
        "Node.js"
    ],
    "esPublico": true,
};

console.log(typeof infoClass); // object

const infoClassJSON = JSON.stringify(infoClass);

console.log(typeof infoClassJSON); // string

// Cadena de caracteres -> Object

const parseInfoClass = JSON.parse(infoClassJSON);

console.log(typeof parseInfoClass); // object