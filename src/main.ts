console.log("este es el main");

// Number
// Explicito
let phone: number;
phone = 1;
phone = 38438492;
// phone = 'hello'; // Error

// Inferido
let phoneNumber = 38438492;
phoneNumber = 123;
// phoneNumber = true: // Error por tipo de dato

// Hexadecimales
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Tipo Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error

// Tipo String
// Tipado Explicito
let username: string = "Alan_Maranto";
username = "Alan";
// username = true; // Error por tipo de dato

// Template String
// Uso de back-tick ``
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + " Maranto "}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log("userinfo", userInfo);
