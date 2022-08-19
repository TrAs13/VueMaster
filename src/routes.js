import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeComponent";
import AboutPage from "./pages/AboutComponent";
import TaskListPage from "./pages/TaskListComponent";
import TaskPage from "./pages/TaskComponent";
import Error404Page from "./pages/Error404Component";
import store from "./store/store";
const routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/tasklist",
    component: TaskListPage,
    async beforeEnter(to, from, next) {
      if (store.getters.getAuth) next();
      next("/");
    },
  },
  {
    path: "/task/:id",
    component: TaskPage,
    name: "taskId",
    props: true,
    async beforeEnter(to, from, next) {
      if (store.getters.getAuth) next();
      next("/");
    },
  },
  {
    path: "/error404",
    component: Error404Page,
  },
  { path: "/:catchAll(.*)", redirect: "/error404" },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
