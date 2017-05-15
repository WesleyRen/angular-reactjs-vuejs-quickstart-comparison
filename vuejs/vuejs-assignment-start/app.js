Vue.component('li-component', {
    template: `<li v-on:click="$emit('remove')">{{index + 1}} : {{ value }}</li>`,
    props: ['value', 'index']
})

new Vue({
    el: '#Vue-app',
    data: {
        hobbies: ['dreaming', 'drone', 'racing drones', 'drones from terminator'],
        userInput: '',
        messageWhenDelete: '',
    },
    methods: {
        addHobbies: function() {
            if (this.userInput.trim() == '') {
                return;
            }
            var newHobby = this.userInput;
            this.hobbies.push(newHobby);
            console.log(this.hobbies);
        },
        remove(hobby, index) {
            console.log(index);
            this.hobbies.splice(index, 1);
            this.messageWhenDelete = 'Hobby "' + hobby + '" Deleted!';
        },
        getColor() {
            if (this.hobbies.length < 3) return 'yellow';
            else if (this.hobbies.length === 3) return 'green';
            else return 'orange';
        }
    }
});
