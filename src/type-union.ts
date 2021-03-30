/* export {}
// 10, '10',

let idUser: number | string;
idUser = 10;
idUser = '10';

// find user by id
function getUsernameById(id: number | string) {
    // logica de negocio, find the user
    return 'alanmaranto';
}

getUsernameById(20)
getUsernameById('20')
 */
// Alias de TS

export {}
// 10, '10',

type IdUser = number | string;
type Username = string
let idUser: IdUser
idUser = 10;
idUser = '10';

// find user by id
function getUsernameById(id: IdUser): Username {
    // logica de negocio, find the user
    return 'alanmaranto';
}

getUsernameById(20)
getUsernameById('20')

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200' // Error
let smallPicture: SquareSize = '100x100'
let mediumPicture: SquareSize = '500x500';