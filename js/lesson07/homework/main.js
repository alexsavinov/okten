// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let Users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "phone": "1-477-935-8478 x6430",
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "phone": "210.067.6132",
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "phone": "586.493.6943 x140",
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "phone": "(775)976-6794 x41206",
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804",
  }
]

console.log("створити пустий масив, наповнити його 10 об'єктами new User(....):");
console.log(Users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let Users1 = Users.filter(element => !(element.id % 2));
console.log("тільки об'єкти з парними id (filter):");
console.log(Users1);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let Users2 = Users.sort((a, b) => a.id - b.id);
console.log("відсортувати його по id. по зростанню (sort):");
console.log(Users2);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(i,
        "name" + i,
        "surname" + i,
        "email" + i,
        "phone" + i,
        i % 2 ? ["item1", "item2", "item3"] : ["item1", "item2"])
    );
}

console.log("створити пустий масив, наповнити його 10 об'єктами Client:");
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
clients = clients.sort((a, b) => a.order.length - b.order.length);
console.log("Відсортувати його по кількості товарів в полі order по зростанню. (sort):");
console.log(clients);
