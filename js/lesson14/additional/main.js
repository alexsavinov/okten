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

function showMessage(message = '',
                     parentElement = document.body,
                     header = false) {
    let d = new Date();
    console.log(d.toLocaleString(), message);

    const divWrap = document.createElement('div');
    divWrap.classList.add('div-wrap', 'd-flex', 'align-items-baseline', 'p-1', 'm-1');
    const div1 = document.createElement('div');
    div1.classList.add('div1', 'badge', header ? 'text-light' : 'text-dark', header ? 'bg-primary' : 'bg-transparent');
    div1.innerHTML = `${d.toLocaleString()}`;
    const div2 = document.createElement('div');
    div2.classList.add('div2', 'ms-2', header ? 'h6' : 'fs-6');
    div2.innerHTML = `${message}`;
    divWrap.append(div1, div2);
    parentElement.appendChild(divWrap);

    return message;
}

// Cинхронизация с помощью только setTimeout
//
function withSetTimout() {
    setTimeout(() => {
        showMessage('синхронизация с помощью только setTimeout', divOutput, true);
        showMessage('wakeup', divOutput);
        increaseProgress();
        setTimeout(() => {
            showMessage('breakfast', divOutput);
            increaseProgress();
            setTimeout(() => {
                showMessage('shower', divOutput);
                increaseProgress();
                setTimeout(() => {
                    showMessage('work1', divOutput);
                    increaseProgress();
                    setTimeout(() => {
                        showMessage('lunch', divOutput);
                        increaseProgress();
                        setTimeout(() => {
                            showMessage('work2', divOutput);
                            increaseProgress();
                            setTimeout(() => {
                                showMessage('rest', divOutput);
                                increaseProgress();
                                setTimeout(() => {
                                    showMessage('study', divOutput);
                                    increaseProgress();
                                    setTimeout(() => {
                                        showMessage('dinner', divOutput);
                                        increaseProgress();
                                        setTimeout(() => {
                                            showMessage('sleep', divOutput);
                                            showMessage('Day is over!', divOutput, true);
                                            increaseProgress();
                                            nav1.classList.remove('disabled');
                                            nav2.classList.remove('disabled');
                                            nav3.classList.remove('disabled');
                                        }, 2000);
                                    }, 1000);
                                }, 1000);
                            }, 2500);
                        }, 500);
                    }, 1000);
                }, 1500);
            }, 300);
        }, 2000);
    }, 500);
}

// Cинхронизация с помощью Promise и setTimeout
//
function withPromises() {
    new Promise(function (resolve) {
        showMessage('синхронизация с помощью Promise и setTimeout', divOutput, true);
        showMessage('wakeup', divOutput);
        increaseProgress();
        setTimeout(() => resolve(), 1000);
    }).then(function (result) {
        showMessage('breakfast', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => { // (*)
            setTimeout(() => resolve(result), 2000);
        });
    }).then(function (result) {
        showMessage('shower', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1500);
        });
    }).then(function (result) {
        showMessage('work1', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 2000);
        });
    }).then(function (result) {
        showMessage('lunch', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 500);
        });
    }).then(function (result) {
        showMessage('work2', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        });
    }).then(function (result) {
        showMessage('rest', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1500);
        });
    }).then(function (result) {
        showMessage('study', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 2000);
        });
    }).then(function (result) {
        showMessage('dinner', divOutput);
        increaseProgress();
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1500);
        });
    }).then(function (result) {
        showMessage('sleep', divOutput);
        increaseProgress();
    }).finally(
        () => {
            showMessage('Day is over!', divOutput, true);
            nav1.classList.remove('disabled');
            nav2.classList.remove('disabled');
            nav3.classList.remove('disabled');
        }
    );
}

// Cинхронизация с помощью async await
//
function withSyncAwait(parentElement = document.body) {
    class Action {
        constructor(delay, message) {
            this.delay = delay;
            this.message = message;
        }

        then(resolve, reject) {
            setTimeout(() => resolve(this.message), this.delay);
        }
    };

    async function today(delay, message) {
        let result = await new Action(delay, message);
        showMessage(result, divOutput);
        increaseProgress();
    }

    showMessage('Cинхронизация с помощью async await.', divOutput, true);

    today(1000, 'wakeup').then(
        () => today(3000, 'breakfast')
    ).then(
        () => today(2000, 'shower')
    ).then(
        () => today(1000, 'work1')
    ).then(
        () => today(1400, 'lunch')
    ).then(
        () => today(5000, 'work2')
    ).then(
        () => today(2200, 'rest')
    ).then(
        () => today(500, 'study')
    ).then(
        () => today(4000, 'dinner')
    ).then(
        () => today(2000, 'sleep')
    ).finally(
        () => {
            showMessage('Day is over!', divOutput, true);
            nav1.classList.remove('disabled');
            nav2.classList.remove('disabled');
            nav3.classList.remove('disabled');
        }
    );
}

let progress = 0;

function increaseProgress() {
    progress += 10;
    let bar = document.getElementById('progress-bar');
    bar.setAttribute('aria-valuenow', `${progress}`);
    bar.setAttribute('style', `width: ${progress}%`);
}

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper', 'm-0');
document.body.appendChild(wrapper);

// navigation
const nav = document.createElement('nav');
nav.classList.add('nav', 'nav-tabs', 'bg-light');

const nav1 = document.createElement('a');
nav1.classList.add('nav-link', 'nav-profile-tab');
nav1.id = 'nav1';
nav1.setAttribute('href', '#');
nav1.innerText = 'SetTimout';

const nav2 = document.createElement('a');
nav2.classList.add('nav-link', 'nav-profile-tab');
nav2.id = 'nav2';
nav2.setAttribute('href', '#');
nav2.innerText = 'Promises';

const nav3 = document.createElement('a');
nav3.classList.add('nav-link', 'nav-profile-tab');
nav3.id = 'nav3';
nav3.setAttribute('href', '#');
nav3.innerText = 'AsyncAwait';

nav.append(nav1, nav2, nav3);
wrapper.appendChild(nav);

// output
const divOutput = document.createElement('div');
divOutput.classList.add('output');
wrapper.appendChild(divOutput);

// fixed-bottom bd-highlight
const divBottom = document.createElement('div');
divBottom.classList.add('fixed-bottom', 'p-2');
const divProgress = document.createElement('div');
divProgress.classList.add('progress');
const divProgressBar = document.createElement('div');
divProgressBar.classList.add('progress-bar');
divProgressBar.id = 'progress-bar';
divProgressBar.setAttribute('role', 'progressbar');
divProgressBar.setAttribute('style', 'width: 0%');
divProgressBar.setAttribute('aria-valuenow', '0');
divProgressBar.setAttribute('aria-valuemin', '0');
divProgressBar.setAttribute('aria-valuemax', '100');
divProgress.appendChild(divProgressBar);
divBottom.appendChild(divProgress);
wrapper.appendChild(divBottom);

nav1.onclick = nav2.onclick = nav3.onclick = (e) => {
    e.preventDefault();

    progress = 0;
    divProgressBar.setAttribute('aria-valuenow', '0');
    divProgressBar.setAttribute('style', 'width: 0%');

    nav1.classList.add('disabled');
    nav2.classList.add('disabled');
    nav3.classList.add('disabled');
    e.target.classList.add('disabled');

    while (divOutput.firstChild) {
        divOutput.removeChild(divOutput.firstChild);
    }

    if (e.target.id === 'nav1') {
        withSetTimout();
    } else if (e.target.id === 'nav2') {
        withPromises();
    } else {
        withSyncAwait();
    }
}

