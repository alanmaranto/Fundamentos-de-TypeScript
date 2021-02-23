// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1 // Error

let otherVariable = null;
otherVariable = "esto es null en string";

console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 23232;

console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);


// Uso de null y undefined como subtipos

// --strictNyllChecks
let albumName: string;
/* albumName = null;
albumName = undefined; */
