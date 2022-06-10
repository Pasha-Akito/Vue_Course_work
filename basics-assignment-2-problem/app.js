const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmName: '',
        }
    },
    methods: {
        submitButton() {
            alert('Pressed button');
        },
        confirmInput() {
            this.confirmName = this.name;
        },
        setName(event) {
            this.name = event.target.value;
        }
    }
});

app.mount('#assignment');