// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы.
// Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//


const wrapper = document.createElement('div');
wrapper.classList.add('m-0');
document.body.appendChild(wrapper);

// navigation
nav = document.createElement('nav');
nav.classList.add('nav', 'bg-light', 'border-bottom');

navHome = document.createElement('a');
navHome.classList.add('nav-link');
navHome.setAttribute('href', 'index.html');
navHome.innerText = 'Home';

nav.appendChild(navHome);
wrapper.appendChild(nav);

const wrapUsers = document.createElement('div');
wrapUsers.classList.add('row', 'g-0', 'justify-content-evenly');
wrapper.appendChild(wrapUsers);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
            for (const user of users) {

                const divUser = document.createElement('div');
                divUser.classList.add('user', 'card', 'm-2', 'col-5', 'bg-white', 'border-secondary');
                wrapUsers.appendChild(divUser);

                // UserHeader
                const divUserHeader = document.createElement('div');
                divUserHeader.classList.add('card-header', 'p-1');

                const divId = document.createElement('div');
                divId.classList.add('badge', 'bg-secondary', 'm-1');
                divId.innerText = `id: ${user.id}`;

                const divName = document.createElement('div');
                divName.classList.add('badge', 'text-dark');
                divName.innerText = user.name;

                divUserHeader.append(divId, divName);
                const btnDetails = document.createElement('a');
                btnDetails.classList.add('btn', 'btn-outline-primary', 'm-2');
                btnDetails.innerText = 'User details';
                btnDetails.onclick = () => {
                    localStorage.setItem('userId', user.id);
                    location.href = 'user-details.html';
                }

                divUser.append(divUserHeader, btnDetails);
            }
        }
    )












