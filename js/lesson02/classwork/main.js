// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
let var1 = +prompt("Enter number 1 of 2");
let var2 = +prompt("Enter number 2 of 2");
if (var1 === var2) {
    console.log("Both numbers are equal");
} else {
    console.log("Max number is: " + Math.max(var1, var2));
}


//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
let flat = +prompt("Enter flat number from 1 to 90");
if (flat >= 1 && flat <= 20) {
    console.log("1st entrance");
} else if (flat >= 21 && flat <= 48) {
    console.log("2nd entrance");
} else if (flat >= 49 && flat <= 90) {
    console.log("3rd entrance");
} else {
    console.log("Wrong number!");
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
let number = +prompt("Enter number");
number === 10 ? console.log("ВІРНО") : console.log("НЕВІРНО");


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else
//
let x = true;
switch (typeof x) {
    case "number":
        console.log(1);
        break;
    case "string":
        console.log(2);
        break;
    case "boolean":
        console.log(3);
        break;
    case "object":
        console.log(4);
        break;
    default:
        console.log("unknown type");
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
let temp = 11;
if (temp >= 10 && temp <= 22) {
    console.log("ми йдемо ВЧИТИСЯ");
} else {
    console.log("сидимо вдома і вчимося ОНЛАЙН");
}


//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
let input = +prompt("Enter a number form 1 to 5");
switch (input) {
    case 1:
        console.log("You win a car!");
        break;
    case 2:
        console.log("You win a bike!");
        break;
    case 3:
        console.log("You win a phone!");
        break;
    case 4:
        console.log("You win a pigeon!");
        break;
    case 5:
        console.log("You win a socks!");
        break;
    default:
        console.log("Number is incorrect :(");
}