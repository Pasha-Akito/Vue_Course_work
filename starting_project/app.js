Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = '';
        }
    }
}).mount('#app');


// const buttonEle = document.querySelector('button');
// const inputEle = document.querySelector('input');
// const ListEle = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEle.value;
//     const listItemEle = document.createElement('li');
//     listItemEle.textContent = enteredValue;
//     ListEle.appendChild(listItemEle);
//     inputEle.value = '';
// }

// buttonEle.addEventListener('click', addGoal);

