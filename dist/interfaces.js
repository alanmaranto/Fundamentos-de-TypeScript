"use strict";
// Función para mostrar una fotografía
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: ".concat(picture.title, "]\n    date: ").concat(picture.date, "\n    orientaton: ").concat(picture.orientation, "\n    "));
}
var myPic = {
    title: "Test Title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
    title: "Test Title",
    date: "2020-03",
    orientation: PhotoOrientation.Portrait,
    //   extra: "test",
});
function generatePicture(config) {
    var picture = { title: "Default", date: "2020-03" };
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
}
var picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
var user;
user = {
    id: 10,
    username: 'alanmaranto',
    isPro: true
};
console.log('user', user);
user.username = 'paparazzi';
user.id = 20; // compiler error
console.log('user', user);
