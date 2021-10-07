// Create a picture
// function createPicture(title, data, size) {
//     // title
// }

type SquareSize = "100x100" | "500x500" | "1000x1000";

/* function createPicture(title: string, date: string, size: SquareSize) {
  // creates picture
  console.log("create picture using", title, date, size);
} */

/* createPicture("my birthday", "2021-09-10", "500x500");
createPicture("Mrxico trip", "2020-10-11");
 */

// Optional parameters
function createPicture(title?: string, date?: string, size?: SquareSize) {
  // creates picture
  console.log("create picture using", title, date, size);
}

// createPicture("my birthday", "2021-09-10", "500x500");
createPicture("my birthday", "2021-09-10");

// Fat Arrow Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
  return {
    title,
    date,
    size,
  };
};

const picture = createPic("murket", "2021-09-10", "500x500");
console.log("picture", picture);


