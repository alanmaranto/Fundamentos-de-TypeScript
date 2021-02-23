"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log("user info", user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "Alan", firstName: "John" });
// Tipo inferido
function showFormattedInfo(user) {
    console.log("user info", "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: "Alan", firstName: "Maranto" });
// tipo void, como tipo de dato en variable
var unusable;
// unusable = null;
// unusable = undefined;
// Cambiando en tsconfig.json la bandera strict mode a false
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not Found");
}
catch (error) { }
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
