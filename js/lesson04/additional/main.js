// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
function union() {
    console.log("якщо два аргументи - складає або конкатенує їх між собою: " + (arguments.length === 1 ? arguments[0] : "" + arguments[0] + arguments[1]));
}

union(1, 4);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
function sumOfArrays(array1 = [], array2 = []) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        resultArray.push(array1[i] + array2[i]);
    }
    return resultArray;
}

console.log("складає значення елементів з однаковими індексами: " + sumOfArrays([1,2,3,4], [2,3,4,5]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
function objectKeys(objects) {
    let array = [];
    for (let i = 0; i < objects.length; i++) {
        for (const item of Object.keys(objects[i])) {
            if (!array.includes(item)) {
                array.push(item);
            }
        }
    }
    return array;
}

let objectsArray = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log("масив ключів всіх обєктів: " + objectKeys(objectsArray));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
function objectValues(objects) {
    let array = [];
    for (let i = 0; i < objects.length; i++) {
        for (const item of Object.values(objects[i])) {
            if (!array.includes(item)) {
                array.push(item);
            }
        }
    }
    return array;
}

// let objectsArray = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log("масив значень всіх обєктів: " + objectValues(objectsArray));


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
function rotateValues(array, i) {
    if (i < array.length - 1) {
        i = Math.min(i, array.length - 2);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
    return array;
}

console.log("міняє місцями об`єкт який знаходиться в індексі \"i\" на \"i+1\": " + rotateValues([9, 8, 0, 4], 3));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function shiftValues(array) {
    let resultArray = [];
    for (const item of array.reverse()) {
        if (item === 0) {
            resultArray.push(item);
        } else {
            resultArray.unshift(item);
        }
    }
    return resultArray;
}

console.log("переносити елементи з значенням 0 у кінець маисву: " + shiftValues([0, 1, 2, 3, 4]));