// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let Users = [
    new User(1, "Leanne Graham", "Bret", "Sincere@april.biz", "1-770-736-8031 x56442"),
    new User(2, "Ervin Howell", "Antonette", "Shanna@melissa.tv", "010-692-6593 x09125"),
    new User(3, "Clementine Bauch", "Samantha", "Nathan@yesenia.net", "1-463-123-4447"),
    new User(4, "Patricia Lebsack", "Karianne", "Julianne.OConner@kory.org", "493-170-9623 x156"),
    new User(5, "Chelsey Dietrich", "Kamren", "Lucio_Hettinger@annie.ca", "(254)954-1289"),
    new User(6, "Mrs. Dennis Schulist", "Leopoldo_Corkery", "Karley_Dach@jasper.info", "1-477-935-8478 x6430"),
    new User(7, "Kurtis Weissnat", "Elwyn.Skiles", "Telly.Hoeger@billy.biz", "210.067.6132"),
    new User(8, "Nicholas Runolfsdottir V", "Maxime_Nienow", "Sherwood@rosamond.me", "586.493.6943 x140"),
    new User(9, "Glenna Reichert", "Delphine", "Chaim_McDermott@dana.io", "(775)976-6794 x41206"),
    new User(10, "Clementina DuBuque", "Moriah.Stanton", "Rey.Padberg@karina.biz", "024-648-3804")
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
