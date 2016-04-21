// Tasks Template
Vue.component('tasks', {

    template: '#tasks-template',

    props: ['list'],

    methods: {
        toggleTaskComplete: function (task) {
            task.completed = !task.completed;
        },

        isCompleted: function (task) {
            return task.completed;
        }
    },

    computed: {
        remaining: function () {

            return this.list.filter(this.isCompleted).length;
        }
    }


});




new Vue({
    el: '#app',

    data: {
        tasks: [
            {body: 'Going to school', completed: true},
            {body: 'Going to hospital', completed: true},
            {body: 'Going to bank', completed: false},
            {body: 'Going to market', completed: false}]
    }
});