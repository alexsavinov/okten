// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
function min(a, b, c) {
    let result;
    if (a < b && a < c) {
        result = a;
    } else if (b < a && b < c) {
        result = b;
    } else {
        result = c;
    }
    console.log("приймає три числа та виводить найменьше: " + result);
}

min(12, 2, 3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
function max(a, b, c) {
    let result;
    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else {
        result = c;
    }
    console.log("приймає три числа та виводить найбільше: " + result);
}

max(12, 2, 3);


// - створити функцію яка повертає найбільше число з масиву
//
function maxElement(array) {
    // 1
    let result;
    for (const item of array) {
        if (result === undefined || item > result) {
            result = item;
        }
    }
    return result;

    // 2
    return Math.max.apply(null, array);
}

console.log("найбільше число з масиву: " + maxElement([-1, -2, -443, -4, -40]));


// - створити функцію яка повертає найменьше число з масиву
//
function minElement(array) {
    // 1
    let result;
    for (const item of array) {
        if (item < result || result === undefined) {
            result = item;
        }
    }
    return result;

    // 2
    return Math.min.apply(null, array);
}

console.log("найменьше число з масиву: " + minElement([-1, -2, -443, -4, -40]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
function sumOfArray(array) {
    // 1
    let result = 0;
    for (const item of array) {
        result += item;
    }
    return result;

    // 2
    return array.reduce((a, b) => a + b, 0);
}

console.log("сумує значення елементів масиву: " + sumOfArray([10, 10, 10]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
function averageOfArray(array) {
    // 1
    let result = 0;
    for (const item of array) {
        result += item;
    }
    return array.length ? result / array.length : 0;

    // 2
    return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0
}

console.log("середнє арифметичне елементів масиву: " + averageOfArray([10, 10, 10]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
console.log("повертає найменьше, а виводить найбільше:");

function minMax() {
    let maxValue = arguments.length ? arguments[0] : 0;
    let minValue = maxValue;
    for (const item of arguments) {
        maxValue = item > maxValue ? item : maxValue;
        minValue = item < minValue ? item : minValue;
    }
    console.log("max: " + maxValue);
    return minValue;
}

console.log("min: " + minMax(-10, -120, -330));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
function randomArray(num = 3) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

console.log("масив з рандомними числами: " + randomArray());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
function randomArrayLimit(limit = 100, num = 3) {
    // 1
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * limit));
    }
    return array;

    // 2
    return Array.from({length: num}, () => Math.floor(Math.random() * limit));
}

console.log("масив з рандомними числами в діапазоні від 0 до limit: " + randomArrayLimit(10));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
function reverseArray(array) {
    // 1
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;

    // 2
    return array.reverse();
}

console.log("новий масив в зворотньому порядку: " + reverseArray([1, 2, 4]));