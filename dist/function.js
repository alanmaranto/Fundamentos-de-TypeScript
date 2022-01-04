"use strict";
// Create a picture
// function createPicture(title, data, size) {
//     // title
// }
Object.defineProperty(exports, "__esModule", { value: true });
/* function createPicture(title: string, date: string, size: SquareSize) {
  // creates picture
  console.log("create picture using", title, date, size);
} */
/* createPicture("my birthday", "2021-09-10", "500x500");
createPicture("Mrxico trip", "2020-10-11");
 */
// Optional parameters
function createPicture(title, date, size) {
    // creates picture
    console.log("create picture using", title, date, size);
}
// createPicture("my birthday", "2021-09-10", "500x500");
createPicture("my birthday", "2021-09-10");
// Fat Arrow Functions
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic("murket", "2021-09-10", "500x500");
console.log("picture", picture);
// Tipo de retorno
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === "error") {
        throw new Error("".concat(message, ". Code error: ").concat(code));
    }
    else {
        return "An error has ocurred";
    }
}
try {
    var result = handleError(200, "ok"); // string
    console.log("result", result);
    result = handleError(404, "error"); // never
    console.log("new result", result);
}
catch (error) { }
