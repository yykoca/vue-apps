Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue.trim().length > 1) {
        this.goals.push(this.enteredValue);
      }
      this.enteredValue = "";
    },
  },
}).mount("#app");
