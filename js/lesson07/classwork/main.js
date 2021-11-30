// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//          і додає його в поточний об'єкт car
//
//
function fCars(model, manufacturer, year, speed, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function () {
        for (const argumentsKey in this) {
            if (typeof (this[argumentsKey]) !== "function")
                console.log(`${argumentsKey} - ${this[argumentsKey]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let fcar = new fCars("Scorpio", "Ford", 2000, 200, 2);
fcar.addDriver({name: 'driver1', age: '30'});
console.log("Створити функцію конструктор яка дозволяє створювати об'єкти car:");
fcar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//          і додає його в поточний об'єкт car
//
class Cars {
    constructor(model, manufacturer, year, speed, capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.capacity = capacity;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.speed} на годину`);
        }
        this.info = function () {
            for (const argumentsKey in this) {
                if (typeof (this[argumentsKey]) !== "function")
                    console.log(`${argumentsKey} - ${this[argumentsKey]}`);
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.speed += newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }

    }
}

let car = new Cars("Scorpio", "Ford", 2000, 200, 2);
car.addDriver({name: 'driver2', age: '33'});
car.increaseMaxSpeed(20);
car.changeYear(1999);
console.log("Створити клас який дозволяє створювати об'єкти car:");
car.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayCinderella = [];
for (let i = 0; i < 10; i++) {
    arrayCinderella.push(new Cinderella("name" + i, 18 + i, 33 + i));
}
console.log("створити класс/функцію конструктор попелюшка:");
console.log(arrayCinderella);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
class Prince {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let prince = new Prince('Arthur', 30, 35);
console.log("Сторити об'єкт класу \"принц\":");
console.log(prince);


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
function matchCinderella(arrayCinderella, prince) {
    for (const item of arrayCinderella) {
        if (item.footSize === prince.footSize) {
            return item;
        }
    }
}

console.log("За допомоги циклу знайти яка попелюшка повинна бути з принцом:");
console.log(matchCinderella(arrayCinderella, prince).name);


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
let matchedCinderella = arrayCinderella.find(value => value.footSize === prince.footSize);
console.log("знайти необхідну попелюшку за допомоги функції масиву find:");
console.log(matchedCinderella.name);
