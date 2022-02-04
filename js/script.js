console.log("VUEJS OK!", Vue);
console.log("AXIOS OK", axios);

Vue.config.devtools = true;

const root = new Vue({
  el: "#root",
  data: {
    emailList: [],
    rangeList: 10,
  },
  methods: {
    getEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          this.emailList.push(res.data.response);
          console.log(this.emailList);
        });
    },
    getListEmail(number) {
      for (let i = 0; i < number; i++) {
        this.getEmail();
      }
    },
  },
  mounted() {
    this.getListEmail(this.rangeList);
  },
});

//     getListEmail(array, maxNumber) {
//       do {
//         this.getEmail();
//       } while (array.length < maxNumber);
//     },
//   },
