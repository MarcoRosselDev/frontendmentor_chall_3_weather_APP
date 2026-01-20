const miURL = new URL("https://www.ejemplo.org/curso/programacion?ordenar=vistas&nivel=1");
// new URL es una clase global que trae node cuando lo instalamos


console.log(miURL.host); // www.ejemplo.org

console.log(miURL.pathname); // /curso/programacion

console.log(miURL.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nive' => '1' }
console.log(typeof miURL.searchParams); // object
console.log(miURL.searchParams.get('ordenar')); // vistas
console.log(miURL.searchParams.get('nivel')); // 1