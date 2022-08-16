import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(routes, VueAxios, axios).mount("#app");
