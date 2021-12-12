//////////////////////////////////////////////////////////////////////////////
// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
const button = document.createElement('button');
button.innerText = 'Show';

const div = document.createElement('div');
div.id = 'text';
div.innerText = 'text text text text text';
div.style.backgroundColor = 'lightpink';
div.classList.add('hideBlock');

const style = document.createElement('style');
style.innerHTML = '.hideBlock { display: none; }';
document.getElementsByTagName('head')[0].appendChild(style);

button.onclick = function () {
    div.classList.toggle('hideBlock');
    button.innerText = button.innerText === 'Hide' ? 'Show' : 'Hide';
}
document.body.append(button, div);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
const buttonHide = document.createElement('button');
buttonHide.innerText = 'Hide at all';
document.body.append(buttonHide);

buttonHide.onclick = function () {
    buttonHide.style.display = buttonHide.style.display === 'none' ? '' : 'none';
}

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
const input = document.createElement('input');
input.type = 'number';
const btn = document.createElement('button');
btn.innerText = 'Check age';
btn.onclick = () => {
    if (!input.value) {
        alert("Введіть вік");
    } else if (input.value < 18) {
        alert("Вік меньше ніж 18");
    } else {
        alert("Вік більше ніж 18");
    }
    input.value = null;
}
const form1 = document.createElement('form');
form1.setAttribute('name', 'form1')
document.body.appendChild(form1);
document.forms.form1.onsubmit = e => e.preventDefault();
document.forms.form1.append(input, btn);
document.forms.form1.append(input, btn);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Создайте меню, которое раскрывается/сворачивается при клике
//
elementsMenu = ['Menu element 1', 'Menu element 2', 'Menu element 3'];
const ul = document.createElement('ul');
for (const element of elementsMenu) {
    const li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

ul.onclick = () => {
    const arrLi = document.getElementsByTagName('li');
    for (let i = 1; i < arrLi.length; i++) {
        arrLi[i].style.display = arrLi[i].style.display === 'none' ? '' : 'none';
    }
}
document.body.append(ul);

document.body.appendChild(document.createElement('hr'));


//////////////////////////////////////////////////////////////////////////////
// - Создать список комментариев, пример объекта комментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
const comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti1'},
    {title: 'lorem2', body: "lorem ipsum dolo sit ameti2"},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti3'}
];

for (let comment of comments) {
    let div = document.createElement('div');

    let divTitle = document.createElement('div');
    divTitle.innerHTML = comment.title;

    let divBody = document.createElement('div');
    divBody.innerHTML = comment.body;
    divBody.style.backgroundColor = 'lightblue';

    let btn = document.createElement('button');
    btn.innerText = '-';
    btn.onclick = () => {
        divBody.style.display = divBody.style.display === 'none' ? '' : 'none';
        btn.innerText = btn.innerText === '-' ? '+' : '-';
    }

    div.append(divTitle, btn, divBody);
    document.body.appendChild(div);
}

