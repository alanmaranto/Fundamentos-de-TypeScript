// Orientacion para fotografias

// With JS
/* 
const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("lands", landscape);
console.log("landsscape string", PhotoOrientation[landscape]);
console.log("landsscape string via indice", PhotoOrientation[0]);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama,
}

console.log("portratir", PictureOrientation.Portrait);

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  Espana = "esp",
}

const country: Country = Country.Colombia;
console.log("country", country);

enum DiasLaborales {
  Lunes = "MON",
  Martes = "TUE",
  Miercoles = "WED",
  Jueves = "THU",
  Viernes = "FRI",
}

enum DiasFinSemana {
  Sabado = "SAT",
  Domingo = "SUN",
}

const Semana = {
  ...DiasLaborales,
  ...DiasFinSemana,
};

console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT

// Unir o extender

enum FirstEnum {
    value1 = 'value1',
    value2 = 'value2'
}

enum SecondEnum {
    value3 = 'value3',
    value4 = 'value4'
}

// change es5 to es6
// let testEnum = Object.assign({}, FirstEnum, SecondEnum);

// console.log(testEnum.value4) // value 4
