//////////////////////////////////////////////////////////////////////////////
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
const input11 = document.createElement('input');
input11.setAttribute('name', 'input11');
input11.setAttribute('type', 'number');
const input12 = document.createElement('input');
input12.setAttribute('name', 'input12');
input12.setAttribute('type', 'number');
const input21 = document.createElement('input');
input21.setAttribute('name', 'input21');
input21.setAttribute('type', 'number');
const input22 = document.createElement('input');
input22.setAttribute('name', 'input22');
input22.setAttribute('type', 'number');

const form1 = document.createElement('form');
form1.setAttribute('name', 'form1')
document.body.appendChild(form1);
document.forms.form1.onsubmit = e => e.preventDefault();
document.forms.form1.append(input11, input12);

const form2 = document.createElement('form');
form2.setAttribute('name', 'form2')
document.body.appendChild(form2);
document.forms.form2.onsubmit = e => e.preventDefault();
document.forms.form2.append(input21, input22);

const btn = document.createElement('button');
btn.innerText = 'Display info';
btn.onclick = () => {
    let input11 = document.forms.form1.input11.value;
    let input12 = document.forms.form1.input12.value;
    let input21 = document.forms.form2.input21.value;
    let input22 = document.forms.form2.input22.value;
    console.log(input11, input12, input21, input22);
    document.forms.form1.input11.value = null;
    document.forms.form1.input12.value = null;
    document.forms.form2.input21.value = null;
    document.forms.form2.input22.value = null;
}

document.body.append(form1, form2, btn);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Створити 3 инпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
const div1 = document.createElement('div');

const input1 = document.createElement('input');
input1.setAttribute('type', 'number');

const input2 = document.createElement('input');
input2.setAttribute('type', 'number');

const input3 = document.createElement('input');

const btn1 = document.createElement('button');
btn1.innerText = 'Create table';
btn1.onclick = () => {
    const tableOld = document.getElementsByTagName('table')[0];
    if (tableOld) tableOld.remove();

    const table = document.createElement('table');
    div1.appendChild(table);

    for (let i = 0; i < input1.value; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let n = 0; n < input2.value; n++) {
            const td = document.createElement('td');
            td.style.border = '1px solid lightgrey';
            td.innerText = input3.value;
            tr.appendChild(td);
        }
    }
    [input1.value, input2.value, input3.value] = [null, null, null];
}

const form3 = document.createElement('form');
form3.setAttribute('name', 'form3')
document.body.appendChild(form3);
document.forms.form3.onsubmit = e => e.preventDefault();
document.forms.form3.append(input1, input2, input3, btn1);

div1.appendChild(form3);
document.body.appendChild(div1);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//

let curseWords = ['Nitwit', 'Bastard', 'Crap'];

const input4 = document.createElement('input');
const btn2 = document.createElement('button');
btn2.innerText = 'Check word';
btn2.onclick = () => {
    if (curseWords.includes(input4.value)) {
        alert('WTF?');
    }
    input4.value = null;
}

const form4 = document.createElement('form');
form4.setAttribute('name', 'form4')
document.body.appendChild(form4);
document.forms.form4.onsubmit = e => e.preventDefault();
document.forms.form4.append(input4, btn2);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
let curseWords2 = ['Nitwit', 'Bastard', 'Crap'];

const input5 = document.createElement('input');
const btn3 = document.createElement('button');
btn3.innerText = 'Check sentence';
btn3.onclick = () => {
    curseWords2.forEach(word => {
        if (input5.value.split(' ').includes(word)) {
            alert('WTF?');
        }
    });
    input5.value = null;
}

const form5 = document.createElement('form');
form5.setAttribute('name', 'form5')
document.body.appendChild(form5);
document.forms.form5.onsubmit = e => e.preventDefault();
document.forms.form5.append(input5, btn3);
