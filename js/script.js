const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [],
      taskInput: '',
      error: false
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
      const compactString = this.taskInput.split(' ').join('');

      if(compactString !== '' && compactString.length > 5) {
        this.todos.unshift(
          {
            text: this.taskInput,
            done: false
          }
        );
        this.taskInput = '';
        this.error = false;
      } else {
        this.error = true;
      }
    },
    // sbarro la task se completata
    isDone(indexTask) {
      if(this.todos[indexTask].done === false) {
        this.todos[indexTask].done = true
      } else {
        this.todos[indexTask].done = false
      }
    },
    // cancello completamente la task
    deleteTask(currIndex) {
      this.todos.splice(currIndex, 1);
    }
  },

  mounted() {
    console.log('>> vue working <<');
  }

}).mount('#app');