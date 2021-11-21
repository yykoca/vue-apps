const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  computed: {
    fullname () {
      if (this.name !== "" && this.lastName !== "") {
        return this.name + " " + this.lastName
      }
    }
  },
  methods: {
    // setName(event) {
    //   this.name = event.target.value;
    // },
    resetInput(){
      this.name = "";
      this.lastName = "";

    },
    addOne() {
      return (this.counter += 1);
    },
    reduceOne() {
      if (this.counter > 0) {
        return (this.counter -= 1);
      }
    },
    add(num) {
      return (this.counter += num);
    },
    reduce(num) {
      return (this.counter -= num);
    },
  },
});

app.mount("#events");
