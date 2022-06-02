const buttonEle = document.querySelector('button');
const inputEle = document.querySelector('input');
const ListEle = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEle.value;
    const listItemEle = document.createElement('li');
    listItemEle.textContent = enteredValue;
    ListEle.appendChild(listItemEle);
    inputEle.value = '';
}

buttonEle.addEventListener('click', addGoal);

