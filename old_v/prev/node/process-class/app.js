console.log(process.argv);
console.log(process.argv[0]); // C:\Program Files\nodejs\node.exe
console.log(process.argv[1]); // c:\Users\andre\Desktop\gitHub\calculo-stewart\node\process-class\app.js
console.log(process.argv[2]); // undefined
console.log(process.argv[3]); // undefined
console.log(process.argv[4]); // undefined

/* 

Terminal
ub\calculo-stewart> node .\node\process-class\app.js 1 2 3 4 5 6


Respuesta
[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\andre\\Desktop\\gitHub\\calculo-stewart\\node\\process-class\\app.js',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]
C:\Program Files\nodejs\node.exe
C:\Users\andre\Desktop\gitHub\calculo-stewart\node\process-class\app.js
1
2
3 */