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
        });
    },
     getListEmail(array, maxNumber) {
        do {
           this.getEmail();
        } while (array <= maxNumber);
    },
   },
  
});
