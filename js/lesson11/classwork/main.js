// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//
const divUsers = document.createElement('div');
document.body.appendChild(divUsers);

localStorage.setItem('favorites', JSON.stringify([]));

for (let i = 0; i < users.length; i++) {
    const user = users[i];

    const div = document.createElement('div');
    div.style.backgroundColor = i % 2 ? '#EEEEEE' : '#DDDDDD';
    div.style.margin = '1px';
    div.style.padding = '2px';
    div.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    divUsers.appendChild(div);

    const btn = document.createElement('button');
    btn.innerText = 'додати до улюблених';
    btn.style.marginLeft = '5px';
    btn.style.padding = '2px';
    div.appendChild(btn);

    btn.onclick = function (e) {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites.find(value =>
            value.name === user.name &&
            value.age === user.age &&
            value.status === user.status)) {

            favorites.push(user);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }
}


// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних
// на попередньому етапі.
//
// см. favorites.html
