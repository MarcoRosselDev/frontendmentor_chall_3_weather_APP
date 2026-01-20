function sayHello(userName) {
    console.log( `hello ${userName}`);
}

console.log('antes de setImmediate');

setImmediate(sayHello, 'marco');

console.log('despues de setImmediate');

/* 
antes de setImmediate
despues de setImmediate
hello marco

se ejecuta despues de que todo el codigo se termine de ejecutar
*/