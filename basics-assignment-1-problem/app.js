const app = Vue.createApp({
    data() {
        return {
            name: 'Pasha',
            age: 23,
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg',
        }
    },
    methods: {
        favouriteNumber() {
            return Math.random();
        }
    }

});

app.mount('#assignment');