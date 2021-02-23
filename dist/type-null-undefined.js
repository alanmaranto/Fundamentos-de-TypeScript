"use strict";
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1 // Error
var otherVariable = null;
otherVariable = "esto es null en string";
console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
var otherUndefined = undefined;
otherUndefined = 23232;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
// Uso de null y undefined como subtipos
// --strictNyllChecks
var albumName;
/* albumName = null;
albumName = undefined; */
