// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//
let str01 = 'hello world';
let str02 = 'lorem ipsum';
let str03 = 'javascript is cool';
console.log("Знайти та вивести довижину настипних стрінгових значень:",
    `${str01.length}, ${str02.length}, ${str03.length}`);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let str04 = 'hello world';
let str05 = 'lorem ipsum';
let str06 = 'javascript is cool';
console.log("Перевести до великого регістру наступні стрінгові значення:",
    `${str04.toUpperCase()}, ${str05.toUpperCase()}, ${str06.toUpperCase()}`);


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
let str07 = 'HELLO WORLD';
let str08 = 'lorem ipsum';
let str09 = 'javascript is cool';
console.log("Перевести до нижнього регістру настипні стрінгові значення:",
    `${str07.toLowerCase()}, ${str08.toLowerCase()}, ${str09.toLowerCase()}`);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str10 = ' dirty string   ';
console.log("Почистити її від зайвих пробілів:", str10.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
let stringToarray = (str) => str.split(' ');
let str11 = 'Каждый охотник желает знать';
let arr = stringToarray(str11);
document.writeln("<br>Напишіть функцію stringToarray(str): " + arr); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
//
let str12 = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    return str.substring(0, length - 1);
}
document.writeln("<br>Напишіть функцію delete_characters(str, length): " + delete_characters(str12, 7)); // Каждый


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let insert_dash = (str, length) => {
    return str.toUpperCase().replaceAll(' ', '-');
}
let str13 = "HTML JavaScript PHP";
document.writeln("<br>Напишіть функцію insert_dash(str): " + insert_dash(str13)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let upperFirst = (str, length) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let str14 = 'каждый охотник желает знать';
document.writeln("<br>регістр першого символу рядка з нижнього регістру у верхній: " + upperFirst(str14)); // 'Каждый охотник желает знать'


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
let capitalize = (str) => {
    return str.split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
}
let str15 = 'каждый охотник желает знать';
document.writeln("<br>Напишіть функцію capitalize(str): " + capitalize(str15)); // 'Каждый Охотник Желает Знать'
