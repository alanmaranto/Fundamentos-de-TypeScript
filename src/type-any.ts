// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = "1"; // string

// Tipo inferido
let otherId;
otherId = 1; // number
otherId = "1"; // string

let surprise: any = "hello world";
// surprise.sayHello(); // Errror
const res = surprise.substring(6);
console.log("res: ", res);