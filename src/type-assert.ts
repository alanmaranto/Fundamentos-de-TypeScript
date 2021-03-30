export {};
// <tipo> // Angle Bracket syntax
let username: any;
username = "alan";

// tenemos una cadena, TS confia en mi
let message: string =
  (<string>username).length > 5
    ? `welcome ${username}`
    : "username is too short";

console.log("message", message);

let usernameWithId: any = "alanmaranto 1";
// obtener el username
username = (<string>usernameWithId).substring(0, 10);
console.log("Username only", username);

// Sintaxis 'as'
message =
  (username as string).length > 5
    ? `welcome ${username}`
    : "username is too short";

console.log("message", message);

let helloUser: any;
helloUser = "hello alan";
username = (helloUser as string).substring(6);
console.log("username", username);
