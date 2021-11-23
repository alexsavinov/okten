// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let areaOfRectangle = (a, b) => {
    return a * b;
}

console.log('обчислює та повертає площу прямокутника: ' + areaOfRectangle(3, 4));


// - створити функцію яка обчислює та повертає площу кола
//
let areaOfCircle = (r) => {
    return Math.PI * Math.pow(r, 2);
}

console.log('обчислює та повертає площу кола: ' + areaOfCircle(10));


// - створити функцію яка обчислює та повертає площу циліндру
//
let areaOfCylinder = (r, h) => {
    return 2 * Math.PI * r * (h + r);
}

console.log('обчислює та повертає площу циліндру: ' + areaOfCylinder(5, 3));


// - створити функцію яка приймає масив та виводить кожен його елемент
//
let printArray = (array) => {
    console.log(`приймає масив та виводить кожен його елемент (${array.length}):`);
    for (const item of array) {
        console.log(item);
    }
}

printArray([0, undefined, null, NaN]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
let makeParagraph = (text) => {
    return `<p>${text}</p>`;
}

console.log(makeParagraph('Paragraph text'));


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
let makeList = (text) => {
    let output = '<ul>';
    output += `<li>${text}</li>`;
    output += `<li>${text}</li>`;
    output += `<li>${text}</li>`;
    output += '</ul>';
    return output;
}

console.log(makeList('List of 3'));


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
let makeList2 = (text, rows) => {
    let output = '<ul>';
    for (let i = 0; i < rows; i++) {
        output += `<li>${text}</li>`;
    }
    output += '</ul>';
    return output;
}

console.log(makeList2('List of X', 3));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let arrayToList = (array) => {
    let output = '<ul>';
    for (const item of array) {
        output += `<li>${item}</li>`;
    }
    output += '</ul>';
    return output;
}

console.log(arrayToList([10100010, 'String', false]));


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
let displayObjects = (array) => {
    document.write(`<h2>${array.length} objects:</h2>`);
    for (const item of array) {
        document.write(
            `<div>
                ${item.id})
                <b>${item.name}</b>,
                age <b>${item.age}</b>
            </div>`
        );
    }
}

let arrayObjects = [
    {id: 1, name: 'John', age: 29},
    {id: 2, name: 'Garry', age: 56},
    {id: 3, name: 'Sam', age: 13},
    {id: 4, name: 'Mike', age: 20},
    {id: 5, name: 'Bob', age: 34}
];
displayObjects(arrayObjects);

