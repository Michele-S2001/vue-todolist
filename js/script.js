const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [],
      taskInput: '',
    }
  },

  methods: {
    // genero le task se ce n'è almeno una nell'array
    isThereTasks() {
      let thereAreTasks = false;
      if(this.todos.length > 0) {
        thereAreTasks = true;
      } 
      return thereAreTasks;
    },
    // aggiungo la nuova task all'array
    addTask() {
      this.todos.unshift(
        {
          text: this.taskInput,
          done: false
        }
      );
      this.taskInput = '';
    },
    // sbarro la task se completata
    isDone(indexTask) {
      if(this.todos[indexTask].done === false) {
        this.todos[indexTask].done = true
      } else {
        this.todos[indexTask].done = false
      }
    },
  },

  mounted() {
    console.log('>> vue working <<');
  }

}).mount('#app');