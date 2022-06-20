const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
            visible: true,

        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = '';
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
        toggleVisible() {
            this.visible = !this.visible;
        }
    },
    computed: {
        visibleClasses() {
            return {hidden: !this.visible}
        }
    }
})

app.mount('#assignment')