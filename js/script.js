console.log("VUEJS OK!", Vue);
console.log("AXIOS OK", axios);

Vue.config.devtools = true;

const root = new Vue({
  el: "#root",
  data: {
    emailList: [],
  },
  methods: {
    getEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          console.log(res.data);
        });
    },
    created() {
      this.getEmail();
    },
  },
});
