new Vue({
    el: '#Vue-app',
    data: {
        hobbies: ['dreaming', 'drone', 'racing drones', 'drones from terminator'],
        userInput: '',
        message: '',
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
        remove(hobby) {
            for (var i = 0; i < this.hobbies.length; i++) {
                if (this.hobbies[i] == hobby) {
                    this.hobbies.splice(i, 1);
                    this.message = 'Hobby Deleted!';
                    break;
                }
            }
        },
        getColor() {
            if (this.hobbies.length < 3) return 'yellow';
            else if (this.hobbies.length === 3) return 'green';
            else return 'orange';
        }
    }
});
