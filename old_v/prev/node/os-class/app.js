// OS = sistema de operaciones
// no es gloval por lo que tenemos que exportar.

const os = require('os')

console.log(os.type()); // Windows_NT
console.log(os.homedir()); // C:\Users\andre
console.log(os.uptime()); //30537.64 ====> en segundos desde que se inicio el sistema operativo
console.log(os.userInfo());
/*{
    uid: -1,
    gid: -1,
    username: 'andre',
    homedir: 'C:\\Users\\andre',
    shell: null
}

*/