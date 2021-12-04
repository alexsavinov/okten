// Все робити за допомоги js.
// - створити блок,
//
const div = document.createElement('div');
div.innerText = 'block';

// - додати йому класи wrap, collapse, alpha, beta
//
div.classList.add("wrap", "collapse", "alpha", "beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
div.style.backgroundColor = 'lightgrey';
div.style.color = 'blue';
div.style.fontSize = '14px';
div.style.padding = '5px';
div.style.marginBottom = '5px';

// - додати цей блок в body.
//
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
//
document.body.appendChild(div.cloneNode(true));


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести
// інформацію про title та monthDuration.
// Завдання робити через цикли.
//
coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    div.innerText = `${value.title} - ${value.monthDuration}`;
    div.style.backgroundColor = 'lightgreen';
    div.style.marginBottom = '2px';
    div.style.padding = '5px';
    document.body.appendChild(div);
});


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
//
coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.style.backgroundColor = 'lightblue';
    div.style.marginBottom = '10px';
    div.style.padding = '10px';
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = value.title;
    h1.style.margin = '0px';
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = value.monthDuration;
    p.style.margin = '0px';
    div.append(h1, p);
    document.body.appendChild(div);
});
