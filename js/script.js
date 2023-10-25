const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [
        {
          text: 'fare i compiti',
          done: false
        }
      ]
    }
  },

  methods: {
    //funzioni
  },

  mounted() {
    console.log('>> vue working <<');
  }

}).mount('#app');