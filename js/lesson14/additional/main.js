// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await
// (Код має бути написаний окремо)
//
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі
//

// сделать с помощью setTimeout,  Promise и sync await

function wakeup() {
    return 'wakeup';
}

function breakfast() {
    return 'breakfast';
}

function shower() {
    return 'shower';
}

function work1() {
    return 'work1';
}

function lunch() {
    return 'lunch';
}

function work2() {
    return 'work2';
}

function rest() {
    return 'rest';
}

function study() {
    return 'study';
}

function dinner() {
    return 'dinner';
}

function sleep() {
    return 'sleep';
}


setTimeout(() => {
    showMessage(wakeup());
    setTimeout(() => {
        showMessage(breakfast());
        setTimeout(() => {
            showMessage(shower());
            setTimeout(() => {
                showMessage(work1());
                setTimeout(() => {
                    showMessage(lunch());
                    setTimeout(() => {
                        showMessage(work2());
                        setTimeout(() => {
                            showMessage(rest());
                            setTimeout(() => {
                                showMessage(study());
                                setTimeout(() => {
                                    showMessage(dinner());
                                    setTimeout(() => {
                                        showMessage(sleep());
                                    }, 10000 * Math.random());
                                }, 10000 * Math.random());
                            }, 10000 * Math.random());
                        }, 10000 * Math.random());
                    }, 10000 * Math.random());
                }, 10000 * Math.random());
            }, 10000 * Math.random());
        }, 10000 * Math.random());
    }, 10000 * Math.random());
}, 10000 * Math.random());

function showMessage(message = '') {
    let d = new Date();
    console.log(d.toLocaleString(), message);
}




function wakeupPromise() {
    return 'wakeup';
}


// async function day() {
//     try {
//         let rez1 = await wakeUp(true);
//         console.log(rez1);
//         let rez2 = await haveBreakfast('Casha');
//         console.log(rez2);
//         let rez3 = await takeShower(true);
//         console.log(rez3);
//         let rez4 = await driveWork(true);
//         console.log(rez4);
//         let rez5 = await workFirst();
//         console.log(rez5);
//         let rez6 = await haveLunch('borsh');
//         console.log(rez6);
//         let rez7 = await workSecond();
//         console.log(rez7);
//         let rez8 = await driveHome(true);
//         console.log(rez8);
//         let rez9 = await doHomework("Additional");
//         console.log(rez9);
//         let rez10 = await lessonJS("From Serg");
//         console.log(rez10);
//         return;
//         // return console.log(rez1, rez2, rez3, rez4, rez5, rez6, rez7, rez8, rez9, rez10); - при таком варианте будет сразу
//     } catch (e) {
//         console.error(e);
//     }
// }