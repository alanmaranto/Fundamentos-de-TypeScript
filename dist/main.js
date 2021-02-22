"use strict";
console.log("este es el main");
// Number
// Explicito
var phone;
phone = 1;
phone = 38438492;
// phone = 'hello'; // Error
// Inferido
var phoneNumber = 38438492;
phoneNumber = 123;
// phoneNumber = true: // Error por tipo de dato
// Hexadecimales
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
// Tipo String
// Tipado Explicito
var username = "Alan_Maranto";
username = "Alan";
// username = true; // Error por tipo de dato
// Template String
// Uso de back-tick ``
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + " Maranto ") + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log("userinfo", userInfo);
