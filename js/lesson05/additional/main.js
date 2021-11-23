// - Дано натуральное число n. Выведите все числа от 1 до n.
//
let naturalis = (n = 10) => {
    // 1
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;

    // 2
    return Array.from({length: n}, (v, k) => k + 1);
}

console.log("все числа от 1 до n: " + naturalis());


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
let vector = (A = 3, B = 5) => {
    let result = [];
    let start = Math.min(A, B);
    let end = Math.max(A, B);
    for (let i = start, n = end; i <= end; i++, n--) {
        result.push(A === start ? i : n);
    }
    return result;
}

console.log("все числа от A до B включительно: " + vector());


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let rotateValues = (array, i) => {
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
//
let shiftValues = (array) => {
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