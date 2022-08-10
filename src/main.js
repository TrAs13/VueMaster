import { createApp } from "vue";
import App from "./App.vue";
import colorDirective from "./directives/color";

const app = createApp(App);

app.directive("color", colorDirective);
app.config.globalProperties.$filters = {
  numberFormat(value, currency = "") {
    return ("" + value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + currency;
  },
};
app.mixin({
  created() {
    console.log("component created: " + this.$options.name);
  },
  mounted() {
    console.log("component mounted: " + this.$options.name);
  },
  updated() {
    console.log("component updated: " + this.$options.name);
  },
});

app.mount("#app");
