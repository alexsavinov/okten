// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
let validator = (email) => {
    email = email.trim().toLowerCase();
    let index = email.indexOf('@');
    if (index === -1) {
        console.log("'@' not found:", email);
    } else if (index === 0) {
        console.log("empty name before '@':", email);
    } else if (email.substring(index, index + 3).includes('.')) {
        console.log("dot too close to '@':", email);
    } else {
        return email + ' is valid';
    }
    return email + ' is not valid';
}
console.log('Створити функцію-валідатор для адрес електронної пошти:',
    validator('someemail@gmail.com') + ',',
    validator('someeMAIL@gmail.com') + ',',
    validator('someeMAIL@i.ua') + ',',
    validator('some.email@gmail.com') + '.'
);


// - є масив
let coursesArray = [
             {
                 title: 'JavaScript Complex',
                 monthDuration: 5,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
             },
             {
                 title: 'Java Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'java core',
                     'java advanced']
             },
             {
                 title: 'Python Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'python core',
                     'python advanced']
             },
             {
                 title: 'QA Complex',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
             },
             {
                 title: 'FullStack',
                 monthDuration: 7,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'node.js',
                     'python',
                     'java']
             },
             {
                 title: 'Frontend',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
             }
         ];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log("відсортувати coursesArray в спадаючому порядку за кількістю елементів в полі modules:", coursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
let count = (str, stringsearch) => {
    return str.split(stringsearch).length - 1;
}
let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln("Напишіть функцію count(str, stringsearch): ",
    count(str, symb)); // 5
console.log("Напишіть функцію count(str, stringsearch): ",
    count(str, symb));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
let cutString = (str, n) => {
    return str.split(' ').slice(0, n).join(' ');
}
let str1 = "Сила тяжести приложена к центру масс тела";
document.writeln("<br>Напишіть функцію cutString(str, n):", cutString(str1, 5)); // 'Сила тяжести приложена к центру'
console.log("Напишіть функцію cutString(str, n):", cutString(str1, 5));
