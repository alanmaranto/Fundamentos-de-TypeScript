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
