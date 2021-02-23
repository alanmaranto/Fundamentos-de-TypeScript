//Para evitar que la variable user se repita en todo el proyecto
export {};

// [1, 'user']
let user: [number, string];
user = [1, 'Alan']

console.log('user', user)
console.log('username', user[1])
console.log('username', user[1].length)
console.log('id', user[0])
console.log('id', user[0].toFixed())

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo)

// Arreglo de Tuplas
let array: [number, string][] = []; // Inicializar el array con un array vacio
array.push([1, 'Alan']); // 0
array.push([2, 'paparazzi']); // 1
array.push([3, 'lensQueen']); // 2
console.log('array', array)

// Uso de funciones Array
// lensQueen -> lensQueen001


array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('array', array)
