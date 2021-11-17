// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


// 1. перебрати його циклом while
//
let i1 = 0;
while (i1 < array.length) {
    console.log(array[i1]);
    i1++;
}


// 2. перебрати його циклом for
//
for (const item of array) {
    console.log(item);
}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
let i2 = 0;
while (i2 < array.length) {
    if (i2 % 2 !== 0) {
        console.log(array[i2]);
    }
    i2++;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
let i3 = 0;
while (i3 < array.length) {
    if (i3 % 2 === 0) {
        console.log(array[i3]);
    }
    i3++;
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}


// 7. замінити кожне число кратне 3 на слово "okten"
//
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
    console.log(array[i]);
}


// 8. вивести масив в зворотньому порядку.
//
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// 9.1. перебрати його циклом while
//
let i4 = array.length - 1;
while (i4 >= 0) {
    console.log(array[i4]);
    i4--;
}


// 9.2. перебрати його циклом for
//
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}


// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
let i5 = array.length - 1;
while (i5 >= 0) {
    if (i5 % 2 !== 0) {
        console.log(array[i5]);
    }
    i5--;
}


// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}


// 9.5. перебрати циклом while та вивести  числа тільки парні  значення
//
let i6 = array.length - 1;
while (i6 >= 0) {
    if (i6 % 2 === 0) {
        console.log(array[i6]);
    }
    i6--;
}


// 9.6. перебрати циклом for та вивести  числа тільки парні  значення
//
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}


// 9.7. замінити кожне число кратне 3 на слово "okten"
//
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
    console.log(array[i]);
}