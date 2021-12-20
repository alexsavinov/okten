// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж.
// При збережені товару з форми, action не повинно відбуватись (preventDefault).
// Cтворити елемент <a href='list.html'>На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар.
//
const wrapper = document.createElement('div');
wrapper.classList.add('m-0');

// navigation
nav = document.createElement('nav');
nav.classList.add('nav', 'bg-light');

navAdd = document.createElement('a');
navAdd.classList.add('nav-link', 'disabled');
navAdd.setAttribute('href', '#');
navAdd.innerText = 'Add new';

navList = document.createElement('a');
navList.classList.add('nav-link');
navList.setAttribute('href', 'list.html');
navList.innerText = 'List';

nav.append(navAdd, navList);
wrapper.appendChild(nav);

// form
const form = document.createElement('form');
form.classList.add('p-1', 'border');

const formGroup = document.createElement('div');
formGroup.classList.add('form-group');

const formHeader = document.createElement('div');
formHeader.classList.add('h3', 'm-2', 'mb-3');
formHeader.innerText = 'Adding new goods';

const inputName = document.createElement('input');
inputName.classList.add('form-control', 'form-control-sm', 'm-2');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Name');

const inputQuantity = document.createElement('input');
inputQuantity.classList.add('form-control', 'form-control-sm', 'm-2');
inputQuantity.setAttribute('type', 'number');
inputQuantity.setAttribute('placeholder', 'Quantity');

const inputPrice = document.createElement('input');
inputPrice.classList.add('form-control', 'form-control-sm', 'm-2');
inputPrice.setAttribute('type', 'number');
inputPrice.setAttribute('placeholder', 'Price');

const inputPic = document.createElement('input');
inputPic.classList.add('form-control', 'form-control-sm', 'm-2');
inputPic.setAttribute('type', 'text');
inputPic.setAttribute('placeholder', 'Picture (link)');

const btnSave = document.createElement('button');
btnSave.classList.add('btn', 'btn-primary', 'm-2');
btnSave.innerText = 'Save';

btnSave.onclick = (e) => {
    e.preventDefault();

    let goods = JSON.parse(localStorage.getItem('goods')) || [];
    if (inputName.value !== '' && !goods.find(value => value.name === inputName.value)) {
        goods.push({
            name: inputName.value,
            quantity: inputQuantity.value,
            price: inputPrice.value,
            picture: inputPic.value
        });
        localStorage.setItem('goods', JSON.stringify(goods));

        const divAlert = document.createElement('div');
        divAlert.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show', 'm-1');
        divAlert.innerHTML = `Item <b>${inputName.value}</b> added!`;

        const btnAlertClose = document.createElement('button');
        btnAlertClose.classList.add('btn-close');
        btnAlertClose.type = 'button';
        btnAlertClose.setAttribute('data-bs-dismiss', 'alert');
        btnAlertClose.setAttribute('aria-label', 'Close');

        divAlert.appendChild(btnAlertClose);

        form.insertBefore(divAlert, form.getElementsByClassName('alert')[0]);

        inputName.value = null;
        inputQuantity.value = null;
        inputPrice.value = null;
        inputPic.value = null;
    }
}

formGroup.append(formHeader, inputName, inputQuantity, inputPrice, inputPic, btnSave);
form.appendChild(formGroup);
wrapper.appendChild(form);
document.body.appendChild(wrapper);









