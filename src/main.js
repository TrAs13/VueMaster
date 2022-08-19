import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(routes, VueAxios, axios).use(store).mount("#app");
