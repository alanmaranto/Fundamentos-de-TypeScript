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

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const picture = { title: "Default", date: "2020-03" };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date;
  }
  return picture;
}

let picture = generatePicture({ title: 'Travel Pic'})
console.log('picture', picture)

// Interfaz: Usuario
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {
    id: 10,
    username: 'alanmaranto',
    isPro: true
}

console.log('user',user)
user.username = 'paparazzi';
user.id = 20; // compiler error
console.log('user',user)
