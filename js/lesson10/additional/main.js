// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести:
// Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
divExample1 = document.createElement('div');
divExample1.style.height = '100px';
divExample1.style.width = '100px';
divExample1.style.backgroundColor = 'lightgreen';
divExample1.style.margin = '20px';
divExample1.classList.add('square', 'div');
divExample1.setAttribute('id', 'divExample1');

divExample2 = document.createElement('div');
divExample2.style.height = '50px';
divExample2.style.width = '50px';
divExample2.style.backgroundColor = 'lightblue';
divExample2.style.margin = '20px';
divExample2.classList.add('square', 'div');
divExample2.setAttribute('id', 'divExample2');

document.body.append(divExample1, divExample2);

document.body.addEventListener('click', function (e) {
    console.log('---------------');
    console.log('Назва тегу:', e.target.tagName);
    console.log('Список класів:', e.target.classList.toString());
    console.log('Список ід:', e.target.id);
    console.log('Розміри:', `${e.target.clientHeight}*${e.target.clientWidth}`);
});


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup:
// Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
const style = document.createElement('style');
style.innerHTML +=
    `.divPopup {
        left: 200px;
        top: -150px;
        height: 80px;
        width: 200px;
        align: right;
        background-color: rgba(200, 200, 200, 0.6);
        padding: 5px;
        border-radius: 5px;
        position: absolute;
    }
    p { 
        margin: 1px;
    }
    .showPopup { 
        top: 10px;
        transition: 1s;
    }`;
document.getElementsByTagName('head')[0].appendChild(style);

divPopup = document.createElement('div');
divPopup.classList.add('divPopup', 'showPopup');

document.body.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        return; // что бы при нажатии на кнопки обхода элементов - не изменялась структура DOM
    }

    while (divPopup.firstChild) {
        divPopup.removeChild(divPopup.firstChild);
    }

    divPopup.classList.toggle('showPopup');
    const p1 = document.createElement('p');
    p1.id = 'p1';
    p1.innerHTML = `Tag name: ${e.target.tagName}`;
    const p2 = document.createElement('p');
    p2.id = 'p2';
    p2.innerHTML = `Class list: ${e.target.classList.toString()}`;
    const p3 = document.createElement('p');
    p3.id = 'p3';
    p3.innerHTML = `Id: ${e.target.id}`;
    const p4 = document.createElement('p');
    p4.id = 'p4';
    p4.innerHTML = `Size: ${e.target.clientHeight}*${e.target.clientWidth}`;

    divPopup.append(p1, p2, p3, p4);
    divPopup.classList.toggle('showPopup');
});

document.body.appendChild(divPopup);

document.body.appendChild(document.createElement('hr'));


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе, так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
const form1 = document.createElement('form');
form1.style.padding = '20px';
form1.setAttribute('name', 'form1')
document.body.appendChild(form1);
document.forms.form1.onsubmit = e => e.preventDefault();

const cb1 = document.createElement('input');
cb1.type = 'checkbox';
cb1.id = 'checkbox1';
const label1 = document.createElement('label');
label1.htmlFor = 'checkbox1';
label1.innerText = 'Cо статусом false';
const br1 = document.createElement('br');

const cb2 = document.createElement('input');
cb2.type = 'checkbox';
cb2.id = 'checkbox2';
const label2 = document.createElement('label');
label2.htmlFor = 'checkbox2';
label2.innerText = 'Cтарше 29 лет включительно';
const br2 = document.createElement('br');

const cb3 = document.createElement('input');
cb3.type = 'checkbox';
cb3.id = 'checkbox3';
const label3 = document.createElement('label');
label3.htmlFor = 'checkbox3';
label3.innerText = 'Город Киев';

document.forms.form1.append(cb1, label1, br1, cb2, label2, br2, cb3, label3);
const divResult = document.createElement('div');
divResult.style.padding = '10px';
document.body.appendChild(divResult);

form1.oninput = function (e) {
    e.preventDefault();

    let newArray = usersWithAddress;
    if (this.checkbox1.checked) {
        newArray = newArray.filter(value => !value.status);
    }
    if (this.checkbox2.checked) {
        newArray = newArray.filter(value => value.age >= 29);
    }
    if (this.checkbox3.checked) {
        newArray = newArray.filter(value => value.address.city === 'Kyiv');
    }

    while (divResult.firstChild) {
        divResult.removeChild(divResult.firstChild);
    }

    newArray.forEach(item => {
        // div.innerText = JSON.stringify(item);
        const div1 = document.createElement('div');
        div1.style.display = 'flex';
        for (const [key, value] of Object.entries(item)) {
            const div = document.createElement('div');
            div.style.border = '1px solid #CCCCCC'
            div.style.margin = '1px';
            div.style.padding = '5px';
            div.style.minWidth = '90px';
            if (typeof value === 'object') {
                for (const [key1, value1] of Object.entries(value)) {
                    div.innerText += `${key1}: ${value1} `;
                }
            } else {
                div.innerText = `${key}: ${value}`;
            }
            div1.appendChild(div);
        }
        divResult.appendChild(div1);
    });
};

document.body.appendChild(document.createElement('hr'));


// *****(Прям овердоз с рекурсией) Создать функцию, которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу,
// при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне).
// НО если у (какого-либо) дочеренего элемента есть дети, то нажатие "вперед"
// позволяет нам войти внутрь элемента и выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
// лежащему с ним на одном уровне
//
const divElement = document.createElement('div');
document.body.appendChild(divElement);

class Overdose {
    constructor(currentNode, prevNode = false) {
        this.currentNode = currentNode;
        this.prevNode = prevNode;
        this.startNode = currentNode;
        this.parentNodeList = [];
        this.position = 0;
    }

    showStatus(direction) {
        console.log('');
        console.log(`** [${direction}] position: ${this.position} / depth: ${this.parentNodeList.length} / path: ${this.parentNodeList.map(item => item.tagName)} `);
        console.log(`[current node] nodeName: ${this.currentNode.nodeName} / id: ${this.currentNode.id} / class: ${this.currentNode.classList}`);
        console.log(`[previous node] tagName: ${this.prevNode.tagName} / id: ${this.prevNode.id} / class: ${this.prevNode.classList}`);
    }

    goForward() {
        this.position++;
        this.showStatus('FORWARD');

        if (this.prevNode === false) {
            console.log('СТАРТ поиска вперед');

            if (this.currentNode.hasChildNodes()) {
                console.log('это узел - спускаемся по нему');
                if (!this.parentNodeList.includes(this.currentNode)) {
                    this.parentNodeList.push(this.currentNode);
                }
                this.prevNode = this.currentNode;
                this.currentNode = this.currentNode.firstChild;
                this.position = 0;
                this.goForward();
            }

            if (this.currentNode.nextSibling === null) {
                console.log('дальше точно ничего нет, останавливаем поиск');
            }
        } else {
            console.log('ПРОДОЛЖЕНИЕ поиска вперед');

            if (this.currentNode === this.startNode) {
                console.log('текущий элемент - это стартовый элемент - вернулись в начало - останавливаем поиск');
                this.prevNode = false;
                return;
            }

            if (this.currentNode.hasChildNodes()) {
                console.log('это узел - спускаемся по нему');

                if (this.currentNode.contains(this.prevNode)) {
                    console.log('предыдущийКеш - дочерний к нам - значит мы там были');

                    if (this.currentNode.nextSibling === null) {
                        console.log("следующий - не существует, и в дочерних мы были - идем обратно наверх");
                        let parentNode = this.parentNodeList.pop();
                        this.prevNode = this.currentNode;
                        this.currentNode = parentNode;
                    } else {
                        console.log("следующий - существует - идем вперед");
                        this.prevNode = this.currentNode;
                        this.currentNode = this.currentNode.nextSibling;
                    }
                } else {
                    console.log('предыдущийКеш - не дочерний к нам - идем по узлу');

                    if (!this.parentNodeList.includes(this.currentNode)) {
                        this.parentNodeList.push(this.currentNode);
                    }
                    this.prevNode = this.currentNode;
                    this.currentNode = this.currentNode.firstChild;
                }
            } else {
                console.log('это не узел');

                if (this.currentNode.nextSibling === null) {
                    console.log('следующий не существует, идем наверх');
                    let parentNode = this.parentNodeList.pop();
                    this.prevNode = this.currentNode;
                    this.currentNode = parentNode;
                } else {
                    console.log('выводим следующий и стоп');
                    this.prevNode = this.currentNode;
                    this.currentNode = this.currentNode.nextSibling;
                }
            }
        }

    }

    goBackward() {
        this.showStatus('BACKWARD');

        if (this.prevNode === false) {
            console.log('СТАРТ поиска назад - это исходная точка - останавливаем поиск');
            this.position = 0;
        } else {
            console.log('ПРОДОЛЖЕНИЕ поиска назад');

            if (this.currentNode === this.startNode) {
                console.log('текущий элемент - это стартовый элемент - вернулись в начало - останавливаем поиск');
                this.prevNode = false;
                return;
            }

            this.position--;

            if (this.currentNode.hasChildNodes()) {
                console.log('это узел - нужно определить направление возврата');

                if (this.currentNode.contains(this.prevNode)) {
                    console.log('предыдущийКеш - дочерний к нам - значит мы там были');

                    if (this.currentNode.previousSibling === null) {
                        console.log('дальше назад ничего нет - поднимаемся по узлу');
                        let parentNode = this.parentNodeList.pop();
                        this.prevNode = this.currentNode;
                        this.currentNode = parentNode;
                    } else {
                        console.log('дальше назад есть элемент - выводим и стоп');
                        this.prevNode = this.currentNode;
                        this.currentNode = this.currentNode.previousSibling;
                    }
                } else {
                    console.log('предыдущийКеш - не дочерний к нам - идем по узлу');
                    if (!this.parentNodeList.includes(this.currentNode)) {
                        this.parentNodeList.push(this.currentNode);
                    }
                    this.prevNode = this.currentNode;
                    this.currentNode = this.currentNode.lastChild;
                }
            } else {
                console.log('это не узел');

                if (this.currentNode.previousSibling === null) {
                    console.log('дальше назад ничего нет');

                    if (this.currentNode === this.startNode) {
                        console.log('текущий элемент - это стартовый элемент - вернулись в начало - останавливаем поиск');
                        this.prevNode = false;
                    } else {
                        console.log('поднимаемся вверх по узлу');
                        let parentNode = this.parentNodeList.pop();
                        this.prevNode = this.currentNode;
                        this.currentNode = parentNode;
                    }
                } else {
                    console.log('дальше назад есть элемент - выводим и стоп');
                    this.prevNode = this.currentNode;
                    this.currentNode = this.currentNode.previousSibling;
                }
            }
        }
    }
}

let zzz = new Overdose(document.body);

const btnBW = document.createElement('button');
btnBW.innerText = '< left element';
btnBW.style.margin = '20px';
btnBW.style.padding = '20px';
const btnFW = document.createElement('button');
btnFW.innerText = 'right element >';
btnFW.style.margin = '20px';
btnFW.style.padding = '20px';
document.body.append(btnBW, btnFW);

btnFW.onclick = function (e) {
    zzz.goForward();
}
btnBW.onclick = function (e) {
    zzz.goBackward();
}

document.body.appendChild(document.createElement('hr'));


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
const divKapycel = document.createElement('div');
divKapycel.style.height = '300px';
divKapycel.style.width = '490px';
divKapycel.style.display = 'flex';
divKapycel.style.justifyContent = 'space-between';

document.body.appendChild(divKapycel);

const btnLeft = document.createElement('button');
btnLeft.innerText = '<';

const btnRight = document.createElement('button');
btnRight.innerText = '>';

divKapycel.appendChild(btnLeft);
divKapycel.style.padding = '20px';

let maxItems = 5;
let indexVisible = 1;

for (let i = 1; i < maxItems + 1; i++) {
    const img = document.createElement('img');
    img.src = `img/${i}.png`;
    img.style.display = i === 1 ? '' : 'none';
    img.style.maxWidth = '450px';
    divKapycel.appendChild(img);
}
divKapycel.appendChild(btnRight);

btnRight.onclick = () => {
    indexVisible = indexVisible === 5 ? 1 : indexVisible + 1;
    for (let i = 1; i < maxItems + 1; i++) {
        divKapycel.children.item(i).style.display = i === indexVisible ? '' : 'none';
    }
}

btnLeft.onclick = () => {
    indexVisible = indexVisible === 1 ? maxItems : indexVisible - 1;
    for (let i = maxItems; i > 0; i--) {
        divKapycel.children.item(i).style.display = i === indexVisible ? '' : 'none';
    }
}

document.body.appendChild(document.createElement('hr'));


//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділенні сегменту тексту на сторінці він стає жирний/курсивний/або якось
//  іншим способом змінює свій стан
//
const divHard = document.createElement('div');
divHard.style.padding = '20px';
divHard.innerHTML = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;
divHard.onmouseup = () => {
    let selObj = window.getSelection();
    console.log(selObj);
    console.log(selObj.toString());
    divHard.innerHTML = divHard.innerText.replace(
        selObj.toString(),
        `<b>${selObj.toString()}</b>`);
}

document.body.appendChild(divHard);


// доп задачка для тех кто все сделал:
// есть JSON такого формата:
// '[{"childs":[{"age":25,"firstName":"Marta"}, ...... ]';
// нужно это все распарсить в такой массив:
//
//     [
//         { age: 60, firstName: 'Alina' },
//         { age: 10, firstName: 'Arnold' },
//         { age: 35, firstName: 'Barbara' },
//         { age: 43, firstName: 'Jack' },
//         { age: 16, firstName: 'Joshua' },
//         { age: 25, firstName: 'Marta' },
//         { age: 44, firstName: 'Michael' },
//         { age: 15, firstName: 'Mike' },
//         { age: 12, firstName: 'Nick' },
//         { age: 32, firstName: 'Peter' },
//         { age: 52, firstName: 'Tom' }
//     ]
// массив отсортирован по firstName
//
// Вот изначальная переменная:
//
const inputJSON = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';
const inputArr = JSON.parse(inputJSON);
const outputArr = [];
const keysArr = ['age', 'firstName'];

function dopZadachka(obj) {
    if (Array.isArray(obj)) {
        for (const item of obj) {
            dopZadachka(item);
        }
    } else {
        if (Object.keys(obj).some(r => keysArr.includes(r))) {
            let currentObj = {};
            for (const [key, value] of Object.entries(obj)) {
                if (keysArr.includes(key)) {
                    currentObj[key] = value;
                } else {
                    dopZadachka(value);
                }
            }
            outputArr.push(currentObj);
        }
    }
}

dopZadachka(inputArr);
outputArr.sort((a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0));
console.log(outputArr);
