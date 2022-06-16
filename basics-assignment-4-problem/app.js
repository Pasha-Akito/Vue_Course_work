const app = Vue.createApp({
    data() {
        return {
            userStyle: '',
            user1Active: false,
            user2Active: false,
            visible: true,
            styleInline: '',
            styleInlineConfirmed: ''
        }
    },
    methods: {
        setStyle(event) {
            this.userStyle = event.target.value;
        },
        setInlineStyle(event){
            this.styleInline = event.target.value;
        },
        styleEntered() {
            if (this.userStyle === "user1") {
                this.user1Active = true;
            } else {
                this.user1Active = false;
            }

            if (this.userStyle === "user2") {
                this.user2Active = true;
            } else {
                this.user2Active = false;
            }
        },
        inlineStyleEntered() {
            this.styleInlineConfirmed = this.styleInline;
        },
        toggleParagraph() {
            this.visible = !this.visible;
        }
    },
    computed: {
        userTextClasses() {
            return { user1: this.user1Active, user2: this.user2Active }
        },
        visibilityClasses() {
            return {visible: this.visible, hidden: !this.visible}
        },
        backgroundColorStyle() {
            return {backgroundColor: this.styleInlineConfirmed}
        }
    }
});

app.mount('#assignment');