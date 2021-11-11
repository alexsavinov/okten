// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let myArray = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
];

let result = 0;
for (const number of myArray) {
    result += number;
}

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'Some book',
    pages: 100,
    genre: 'fiction'
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book = {
    name: 'Some book',
    pages: 100,
    genre: 'fiction',
    authors: 'A1, A2'
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book = [
    {name: 'Some book', pages: 100, genre: 'fiction', authors: 'A1, A2'},
    {name: 'Some book1', pages: 300, genre: 'fantasy', authors: 'A2, A3'},
    {name: 'Some book2', pages: 200, genre: 'detective', authors: 'A4, A1'}
]

for (const bookElement of book) {
    console.log(bookElement);
}

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = heightC * Math.pow(dC / 2, 2) * Math.PI;

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + m ** 2);

console.log(k);
