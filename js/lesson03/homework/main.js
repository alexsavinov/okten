// --створити масив з:
// - з 5 числових значень
//
let array1 = [1, 22, 0, 44, -1];
console.log(array1);


// - з 5 стічкових значень
//
let array2 = ['string1', '-4', 'false', 'test', '123'];
console.log(array2);


// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let array3 = ['string1', 'test', -100, 0, true];
console.log(array3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let array4 = [];
array4[0] = 3;
array4[1] = 'string1';
array4[2] = NaN;
array4[3] = true;
array4[4] = null;
console.log(array4);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
for (let i = 0; i < 10; i++) {
    document.write('<div>some text</div>');
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
for (let i = 0; i < 10; i++) {
    document.write(`<div>block #${i}</div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
let i1 = 0;
while (i1 < 20) {
    document.write('<h1>tag h1</h1>');
    i1++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
let i2 = 0;
while (i2 < 20) {
    document.write(`<h1>tag h1 #${i2}</h1>`);
    i2++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
let array5 = [3, 7, 11, 52, 66, 41, -44, 98, 0, -5];
for (const item of array5) {
    console.log(item);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
let array6 = ['3', '7', '11', '52', '66', '41', '-44', '98', '0', '-5'];
for (const item of array6) {
    console.log(item);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
let array7 = [true, 'string1', 11, 'string2', 66, true, 'string3', false, 0, 'string4'];
for (const item of array7) {
    console.log(item);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
let array8 = [true, 'string1', 11, 'string2', 66, true, 'string3', false, 0, 'string4'];
for (const item of array8) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
let array9 = [true, 'string1', 11, 'string2', 66, true, 'string3', false, 0, 'string4'];
for (const item of array9) {
    if (typeof item === 'number') {
        console.log(item);
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
let array10 = [true, 'string1', 11, 'string2', 66, true, 'string3', false, 0, 'string4'];
for (const item of array10) {
    if (typeof item === 'string') {
        console.log(item);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
let array11 = [];
array11[0] = true;
array11[1] = 1;
array11[2] = 'string1';
array11[3] = -55;
array11[4] = 'string2';
array11[5] = false;
array11[6] = 0;
array11[7] = 'string3';
array11[8] = true;
array11[9] = 422;
array11[10] = -92;
for (const item of array11) {
    console.log(item);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}
