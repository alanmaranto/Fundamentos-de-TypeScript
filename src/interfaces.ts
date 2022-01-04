// Función para mostrar una fotografía

export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title}]
    date: ${picture.date}
    orientaton: ${picture.orientation}
    `);
}

let myPic = {
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
