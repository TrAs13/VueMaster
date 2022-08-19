import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(store).use(routes, VueAxios, axios).mount("#app");
