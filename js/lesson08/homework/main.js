// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
//
console.log("-- отримує текст з параграфа з id \"content\"");
console.log(document.getElementById("content").innerText);

//     -- отримує текст з блоку з id "rules"
//
console.log("-- отримує текст з блоку з id \"rules\"");
console.log(document.getElementById("rules").innerText);

//     -- замініть текст параграфа з id 'content' на будь-який інший
//
console.log("-- замініть текст параграфа з id 'content' на будь-який інший");
document.getElementById("content").innerText = 'будь-який content';
console.log(document.getElementById("content").innerText);

//     -- замініть текст параграфа з id 'rules' на будь-який інший
//
console.log("-- замініть текст параграфа з id 'rules' на будь-який інший");
document.getElementById("rules").innerText = 'будь-який rules';
console.log(document.getElementById("rules").innerText);

//     -- змініть кожному елементу колір фону на червоний
//
let children = document.body.children;
for (const child of children) {
    child.style.background = 'red';
}

//     -- змініть кожному елементу колір тексту на синій
//
// let children = document.body.children;
for (const child of children) {
    child.style.color = 'blue';
}

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
console.log("-- отримати весь список класів елемента з id=rules");
console.log(document.getElementById("rules").classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
let elements = document.getElementsByClassName("fc_rules");
for (const element of elements) {
    element.style.color = 'red';
    // element.style.background = 'white';
}
