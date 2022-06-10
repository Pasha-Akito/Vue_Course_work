const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
    },
    computed: {
        condition() {
            if (this.counter < 37) {
                return "Not there yet"
            } else if (this.counter > 37) {
                return "Too Much!"
            } else {
                return ""
            }
        }
    },
    watch: {
        counter(value) {
            if (value > 0){
                //storing this in that because we're using a function 
                // JS specific problem
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 5000)
            }
        }
    }
});

app.mount('#assignment');