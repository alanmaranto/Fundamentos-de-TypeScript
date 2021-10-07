"use strict";
// Create a picture
// function createPicture(title, data, size) {
//     // title
// }
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
