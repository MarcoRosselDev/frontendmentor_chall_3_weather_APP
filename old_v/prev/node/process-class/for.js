for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

console.log(process.memoryUsage());

/* Terminal ==> ----------------------------------------
node .\node\process-class\for.js 1 2 3 1 2 1 9 8 0 89123 12 456 6 2 0

Respuesta------------------------------------------------
1
2
3
1
2
1
9
8
0
89123
12
456
6
2
0 
-----------------------------------------------------------
Memory usage response

{
    rss: 31059968,
    heapTotal: 6426624,
    heapUsed: 5760912,
    external: 444280,
    arrayBuffers: 17382
}

*/