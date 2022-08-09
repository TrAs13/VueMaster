import { createApp } from "vue";
import App from "./App.vue";
import colorDirective from "./directives/color";

const app = createApp(App);

app.directive("color", colorDirective);

app.mount("#app");
