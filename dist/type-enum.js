"use strict";
// Orientacion para fotografias
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// With JS
/*
const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log("lands", landscape);
console.log("landsscape string", PhotoOrientation[landscape]);
console.log("landsscape string via indice", PhotoOrientation[0]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log("portratir", PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var country = Country.Colombia;
console.log("country", country);
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales["Lunes"] = "MON";
    DiasLaborales["Martes"] = "TUE";
    DiasLaborales["Miercoles"] = "WED";
    DiasLaborales["Jueves"] = "THU";
    DiasLaborales["Viernes"] = "FRI";
})(DiasLaborales || (DiasLaborales = {}));
var DiasFinSemana;
(function (DiasFinSemana) {
    DiasFinSemana["Sabado"] = "SAT";
    DiasFinSemana["Domingo"] = "SUN";
})(DiasFinSemana || (DiasFinSemana = {}));
var Semana = __assign(__assign({}, DiasLaborales), DiasFinSemana);
console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT
// Unir o extender
var FirstEnum;
(function (FirstEnum) {
    FirstEnum["value1"] = "value1";
    FirstEnum["value2"] = "value2";
})(FirstEnum || (FirstEnum = {}));
var SecondEnum;
(function (SecondEnum) {
    SecondEnum["value3"] = "value3";
    SecondEnum["value4"] = "value4";
})(SecondEnum || (SecondEnum = {}));
// change es5 to es6
// let testEnum = Object.assign({}, FirstEnum, SecondEnum);
// console.log(testEnum.value4) // value 4
