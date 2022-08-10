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

app.mount("#app");
