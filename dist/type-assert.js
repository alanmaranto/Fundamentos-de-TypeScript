"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
var username;
username = "alan";
// tenemos una cadena, TS confia en mi
var message = username.length > 5
    ? "welcome " + username
    : "username is too short";
console.log("message", message);
var usernameWithId = "alanmaranto 1";
// obtener el username
username = usernameWithId.substring(0, 10);
console.log("Username only", username);
// Sintaxis 'as'
message =
    username.length > 5
        ? "welcome " + username
        : "username is too short";
console.log("message", message);
var helloUser;
helloUser = "hello alan";
username = helloUser.substring(6);
console.log("username", username);
