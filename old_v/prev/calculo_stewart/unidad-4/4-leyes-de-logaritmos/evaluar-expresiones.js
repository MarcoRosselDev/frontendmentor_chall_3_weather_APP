/* Leyes de logaritmos

1   log AB = log A + log B
2   log A/B = log A - log B
3   log A^c = c log A

*/

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

console.log(Math.log(100));
    
// 2 x 2 x 2 = 8
//console.log(getBaseLog(2, 8));
// Expected output: 3
    
// 5 x 5 x 5 x 5 = 625
//console.log(getBaseLog(5, 625));
// Expected output: 4