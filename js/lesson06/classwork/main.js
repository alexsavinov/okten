// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalize = (str) => {
    for (const symbol of ['.', '-', '_']) {
        str = str.replaceAll(symbol, ' ');
    }
    return str.split(' ').filter(element => element).join(' ');
}

console.log('приймає будь яке не валідне імя, та нормалізує його:',
    normalize(n1) + ',',
    normalize(n2) + ',',
    normalize(n3) + '.'
);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
let randomNumber = (size = 5) => {
    return Array.from({length: size}, element => Math.floor(Math.random() * 100));
}
console.log('масив рандомних числових цілих значень в діапазоні від 0 до 100:', randomNumber());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
let arr01 = randomNumber();
arr01.sort();
console.log('Відсортувати його за допомоги sort:', arr01);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let arr01 = randomNumber();
let arr02 = arr01.filter(element => element % 2 === 0);
console.log('відфільтрувати  його за допомоги filter, залишивши тільки парні числа:', arr02);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
let arr03 = arr02.map(element => element.toString());
console.log('за допомоги map та колбеку перетворити всі об\'єкти в масиві на стрінгові:', arr01);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
let sortNums = (arr = [], direction = 'asc') => {
    return arr.sort((a, b) => direction === 'asc' ? a - b : b - a);
}

console.log('сортує в залежності від значення аргументу direction:', sortNums(arr01, 'desc'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
//
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log('відсортувати його за спаданням за monthDuration:', coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
let arr04 = coursesAndDurationArray.filter(element => element.monthDuration > 5);
console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців:', arr04);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
let cutString = (str, n) => {
    arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }
    return arr;
}
document.writeln('Напишите функцию cutString(str, n): ' + cutString('наслаждение', 3)); // [нас,лаж,ден,ие]
console.log('Напишите функцию cutString(str, n):', cutString('наслаждение', 3));
