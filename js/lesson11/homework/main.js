// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
//
const input1 = document.createElement('input');
input1.name = 'input1';
input1.style.margin = '5px';
const label1 = document.createElement('label');
label1.htmlFor = 'input1';
label1.innerText = 'Name: ';
label1.appendChild(input1);
const input2 = document.createElement('input');
input2.name = 'label2';
input2.style.margin = '5px';
const label2 = document.createElement('label');
label2.htmlFor = 'label2';
label2.innerText = 'e-mail: ';
label2.appendChild(input2);

const form1 = document.createElement('form');
form1.setAttribute('name', 'form1')

document.body.appendChild(form1);
document.forms.form1.onsubmit = e => e.preventDefault();
document.forms.form1.append(label1, label2);

const btn = document.createElement('button');
btn.innerText = 'Save to localStorage';
btn.style.padding = '5px';
btn.style.margin = '5px';
btn.onclick = () => {
    let user = {
        'name': input1.value,
        'email': input2.value
    };
    localStorage.setItem('user', JSON.stringify(user));

    [input1.value, input2.value] = [null, null];
}

document.body.append(form1, btn);

document.body.appendChild(document.createElement('hr'));


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
const inputModel = document.createElement('input');
inputModel.name = 'input1';
inputModel.style.margin = '5px';
const labelModel = document.createElement('label');
labelModel.htmlFor = 'inputModel';
labelModel.innerText = 'Model: ';
labelModel.appendChild(inputModel);

const inputType = document.createElement('input');
inputType.name = 'input1';
inputType.style.margin = '5px';
const labelType = document.createElement('label');
labelType.htmlFor = 'inputType';
labelType.innerText = 'Type: ';
labelType.appendChild(inputType);

const inputVolume = document.createElement('input');
inputVolume.name = 'input1';
inputVolume.style.margin = '5px';
const labelVolume = document.createElement('label');
labelVolume.htmlFor = 'inputVolume';
labelVolume.innerText = 'Volume: ';
labelVolume.appendChild(inputVolume);

const form2 = document.createElement('form');
form2.setAttribute('name', 'form2');

form2.append(labelModel, labelType, labelVolume);

const btn2 = document.createElement('button');
btn2.innerText = 'Save to localStorage';
btn2.style.padding = '5px';
btn2.style.margin = '5px';
btn2.onclick = () => {
    let car = {
        'model': inputModel.value,
        'type': inputType.value,
        'volume': inputVolume.value
    };
    localStorage.setItem('car', JSON.stringify(car));

    [inputModel.value, inputType.value, inputVolume.value] = [null, null, null];
}

document.body.append(form2, btn2);
