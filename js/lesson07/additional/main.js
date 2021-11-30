// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//

class User {
    constructor(id, name, username, email,
                addressStreet, addressSuite, addressCity, addressZipcode,
                addressGeoLat, addressGeoLng,
                phone, website,
                companyName, companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,
            geo: {
                lat: addressGeoLat,
                lng: addressGeoLng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs
        };
    }
}

const usr = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');
console.log("Створити клас або функцію конструктор:");
console.log(usr);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

console.log("Створити функцію конструктор / клас  який описує об'єкт тегу:");

let tag;
//  -a
tag = new Tag(
    'a',
    "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.",
    [
        {titleOfAttr: "href", actionOfAttr: "Задает адрес документа, на который следует перейти."},
        {titleOfAttr: "name", actionOfAttr: "Устанавливает имя якоря внутри документа."}
    ]
);
console.log(tag);

//  -div
tag = new Tag(
    'div',
    "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
    [
        {titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега <div>."},
        {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."}
    ]
);
console.log(tag);

//  -h1
tag = new Tag(
    'h1',
    "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.",
    [
        {titleOfAttr: "align", actionOfAttr: "Определяет выравнивание заголовка."}
    ]
);
console.log(tag);

//  -span
tag = new Tag(
    'span',
    "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
    [
        {titleOfAttr: "_", actionOfAttr: "Для этого тега доступны универсальные атрибуты и события."}
    ]
);
console.log(tag);

//  -input
tag = new Tag(
    'input',
    "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
    [
        {titleOfAttr: "type", actionOfAttr: "Сообщает браузеру, к какому типу относится элемент формы."},
        {titleOfAttr: "required", actionOfAttr: "Обязательное для заполнения поле."},
        {titleOfAttr: "form", actionOfAttr: "Связывает поле с формой по её идентификатору."}
    ]
);
console.log(tag);

//  -form
tag = new Tag(
    'form',
    "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.",
    [
        {titleOfAttr: "action", actionOfAttr: "Адрес программы или документа, который обрабатывает данные формы."},
        {titleOfAttr: "method", actionOfAttr: "Метод протокола HTTP."},
        {titleOfAttr: "name", actionOfAttr: "Имя формы."}
    ]
);
console.log(tag);

//  -option
tag = new Tag(
    'option',
    "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.",
    [
        {titleOfAttr: "label", actionOfAttr: "Указание метки пункта списка."},
        {titleOfAttr: "selected", actionOfAttr: "Заранее устанавливает определенный пункт списка выделенным."},
        {
            titleOfAttr: "value",
            actionOfAttr: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."
        }
    ]
);
console.log(tag);

//  -select
tag = new Tag(
    'select',
    "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.",
    [
        {titleOfAttr: "form", actionOfAttr: "Связывает список с формой."},
        {titleOfAttr: "multiple", actionOfAttr: "Позволяет одновременно выбирать сразу несколько элементов списка."},
        {titleOfAttr: "name", actionOfAttr: "Имя элемента для отправки на сервер или обращения через скрипты."}
    ]
);
console.log(tag);


////////////////////////
// FILE: сlosures.pdf
// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає об’єкт з методами:
// const card3 = userCard(3); // returns an object with methods
// User Card методи:
// - getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про карту:
// card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
//  • balance (по замовчуванням 100)
//  • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
//  • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
//  • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// - putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
// card3.putCredits(150);
// - takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// - transferCredits.
// Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
// та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).
//
// Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
// • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
//
function userCard(i) {
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = i;
    this.getCardOptions = () => {
        return {
            balance: this.balance,
            transactionLimit: this.transactionLimit,
            historyLogs: this.historyLogs,
            key: this.key
        }
    }
    this.putCredits = (credits) => {
        this.balance += credits;
        this.writeLog("Received credits", credits);
    }
    this.takeCredits = (credits) => {
        this.balance -= credits;
        this.writeLog("Withdrawal of credits", credits);
    }
    this.setTransactionLimit = (credits) => {
        this.transactionLimit = credits;
        this.writeLog("Transaction limit change", credits);
    }
    this.transferCredits = (credits, card) => {
        const tax = Math.round(credits * 0.005 * 100) / 100;
        if (this.transactionLimit <= credits) {
            console.error("transaction limit reached!");
        } else if (this.balance - (credits + tax) <= 0) {
            console.error("credits limit reached!");
        } else {
            this.balance -= credits + tax;
            this.writeLog("Withdrawal of credits", credits + tax);
            card.balance += credits;
            card.writeLog("Received credits", credits);
        }
    }
    this.writeLog = (operationType, credits) => {
        const currentDate = new Date;
        this.historyLogs.push(
            {
                operationType: operationType,
                credits: credits,
                operationTime: currentDate.toISOString().replace('T', ', ').replaceAll('-', '/').substring(0, 20)
            }
        );
    }
}

console.log("Створити карту користувача(User Card):");
const card01 = new userCard(1);
const card02 = new userCard(2);
const card03 = new userCard(3);
console.log(card03.getCardOptions());
card03.putCredits(300);
card03.setTransactionLimit(556);
console.log(card03.getCardOptions());
card03.transferCredits(11, card02);
console.log(card03.getCardOptions());


// 2) Створити UserAccount:
// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
// Властивості акаунту користувача:
// - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
// - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
// cards:
// user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
// /*
// * Повертає об’єкт {
// * key: 1,
// * balance: 150,
// * ...other card properties
// * }
// */
// user.getCardByKey(1);
// КодПриклад переказу коштів:
// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// Посилання
// - https://css-tricks.com/javascript-scope-closures/
// - https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Classes

let totalCards = 0;

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (totalCards < 3) {
            totalCards++;
            this.cards.push(new userCard(totalCards));
        }
    }
    getCardByKey(key) {
        return this.cards.find(item => item.key === key);
    }
}

console.log("Створити UserAccount:");

const user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(user);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
