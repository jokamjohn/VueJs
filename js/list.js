// Tasks Template
Vue.component('tasks', {

    template: '#tasks-template',

    props: [ 'list'],

    methods: {
        toggleTaskComplete: function (task) {
            task.completed = !task.completed;
        }
    }


});

new Vue({
    el: '#app',

    data: {
        tasks: [
            {body:'Going to school', completed:true },
            {body:'Going to hospital', completed:true },
            {body:'Going to bank', completed:false },
            {body:'Going to market', completed:false }]
    }
});