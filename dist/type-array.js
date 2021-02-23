"use strict";
// Corchetes []
// Tipo Explicito
var users;
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // Error
// Tipo Inferido
var otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];
// otherUsers = [1, true, 'test']; // Error
// Array<TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('fist title', pictureTitles[0]);
// Propiedades en Array
console.log('users.length', users.length);
// Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users', users);
