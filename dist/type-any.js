"use strict";
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = "1"; // string
// Tipo inferido
var otherId;
otherId = 1; // number
otherId = "1"; // string
var surprise = "hello world";
// surprise.sayHello(); // Errror
var res = surprise.substring(6);
console.log("res: ", res);
