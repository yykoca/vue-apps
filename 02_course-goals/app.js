Vue.createApp({
  data() {
    return {
      goalA: ["Learn Vue!", 'Master Vue and build amazing apps!'],
      goalB: ["Übung macht den Meister!", "Abwarten und tee trinken"],
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoals() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.goalA
      } else {
        return this.goalB
      }
    }
  }
}).mount('#user-goal');