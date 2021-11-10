// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let var1 = "hello";
let var2 = "owu";
let var3 = "com";
let var4 = "ua";
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);

alert(var1);
alert(var2);
alert(var3);
alert(var4);
alert(var5);
alert(var6);
alert(var7);
alert(var8);
alert(var9);
alert(var10);
alert(var11);
alert(var12);
alert(var13);

document.write(var1);
document.write(var2);
document.write(var3);
document.write(var4);
document.write(var5);
document.write(var6);
document.write(var7);
document.write(var8);
document.write(var9);
document.write(var10);
document.write(var11);
document.write(var12);
document.write(var13);


// - Переприсвоїти кожній змінній з завдання значення на довільне.
var1 = "test";
var2 = 112;
var3 = "test2";
var4 = 3332;
var5 = -4;
var6 = false;
var7 = NaN;
var8 = 0;
var9 = '444';
var10 = 56;
var11 = 2;
var12 = -52;
var13 = 431;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);

alert(var1);
alert(var2);
alert(var3);
alert(var4);
alert(var5);
alert(var6);
alert(var7);
alert(var8);
alert(var9);
alert(var10);
alert(var11);
alert(var12);
alert(var13);

document.write(var1);
document.write(var2);
document.write(var3);
document.write(var4);
document.write(var5);
document.write(var6);
document.write(var7);
document.write(var8);
document.write(var9);
document.write(var10);
document.write(var11);
document.write(var12);
document.write(var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = "Oleksii";
let middleName = "Oleksandrovich";
let lastName = "Savinov";
let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let myFirstName = prompt("Enter your First name: ");
let myMiddleName = prompt("Enter your Second name: ");
let myYears = prompt("Enter your age: ");

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log(`Вітаю ${myFirstName} ${myMiddleName}. Тобі ${myYears} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 != 10);
console.log(10 !== 10);
console.log(123 > '123');
console.log(123 == '123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

let str = "20";
let a = 5;

document.write(str + a + "<br/>");
// Выведет строку "205".
// Оператор + вызвал строкове преобразование второго операнда, т.к. первый операнд является строкой.
// Выполнилась конкатенация строк: "20" + "5" = "205".

document.write(str - a + "<br/>");
// Выведет число 15.
// Оператор - вызвал численное преобразование первого операнда. 20 - 5 = 15.

document.write(str * "2" + "<br/>");
// Выведет число 40.
// Оператор * вызвал численное преобразование обеих операндов. 20 * 2 = 40.

document.write(str / 2 + "<br/>");
// Выведет число 10.
// Оператор / вызвал численное преобразование первого операнда. 20 / 2 = 10.
