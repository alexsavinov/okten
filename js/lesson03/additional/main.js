// 1. Створити пустий масив та :
//
let array = [];


//        a. заповнити його 50 парними числами за допомоги циклу.
//
for (let i = 0; i < 100; i += 2) {
    array.push(i);
}
console.log(array);


//        b. заповнити його 50 непарними числами за допомоги циклу.
//
array = [];
for (let i = 1; i < 100; i += 2) {
    array.push(i);

}
console.log(array);


//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 100));
}
console.log(array);


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
array = [];
min = 8;
max = 732;
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * (max - min)) + min);
}
console.log(array);


//  2. Вивести за допомогою console.log кожен третій елемен
//
for (let i = 2; i < array.length; i += 3) {
    console.log(array[i]);
}


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
for (let i = 2; i < array.length; i += 3) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
let newArray = [];
for (let i = 2; i < array.length; i += 3) {
    if (i % 2 === 0) {
        console.log(array[i]);
        newArray.push(array[i]);
    }
}
console.log(newArray);


//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] % 2 === 0) {
        console.log(`елемент = ${array[i]}, сусід справа = ${array[i + 1]}`);
    }
}


//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (const item of array) {
//     sum += item;
// }
// let average = sum / array.length;
let average = array.reduce((a, b) => a + b, 0) / array.length;
console.log(`середній чек: ${average}`);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
array = [];
for (let i = 0; i < 3; i++) {
    array[i] = Math.floor(Math.random() * 10);
    // console.log(array[i]);
    array[i] *= 5;
    // console.log(array[i]);
}

newArray = [...array];
console.log(newArray)


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
let arrayIn = ['str1', -2, 0, true, 'str2'];
let arrayOut = [];
for (const item of arrayIn) {
    if (typeof item === "number") {
        arrayOut.push(item);
    }
}
console.log(arrayOut);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
//
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            let item = user;
            item.address = city;
            usersWithCities.push(item);
        }
    }
}
console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`[парное значение элемента] индекс ${i}, значение ${array[i]}`);
    }
    if (i % 2 === 0) {
        console.log(`[парный индекс элемента] индекс ${i}, значение ${array[i]}`);
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
arrayIn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayOut = [];
for (const item of arrayIn) {
    arrayOut.push(item);
}
console.log(arrayOut);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
array = ['a', 'b', 'c'];
let str1 = '';
for (let i = 0; i < array.length; i++) {
    str1 += array[i];
}
console.log(str1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
array = ['a', 'b', 'c'];
let str2 = '';
let i = 0;
while (i < array.length) {
    str2 += array[i];
    i++;
}
console.log(str2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
array = ['a', 'b', 'c'];
let str3 = '';
for (const item of array) {
    str3 += item;
}
console.log(str3);
