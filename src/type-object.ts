// Type : object
let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'alan',
    firstName: 'Alan',
    isPro: true
};

console.log(user)
//Object vs object (Clase JS vs Tipo TS)
const myOb = {
    id: 1,
    username: 'alan',
    firstName: 'Alan',
    isPro: true
};

const isInstance = myOb instanceof Object; // clase Object JavaScript
console.log('isInstance', isInstance)

console.log(myOb.id)