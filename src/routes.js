import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeComponent";
import AboutPage from "./pages/AboutComponent";
import TaskListPage from "./pages/TaskListComponent";
import TaskPage from "./pages/TaskComponent";
import Error404Page from "./pages/Error404Component";
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
    beforeEnter(to, from, next) {
      if (localStorage.getItem("auth") == "true") next();
    },
  },
  {
    path: "/task/:id",
    component: TaskPage,
    props: true,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("auth") == "true") next();
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
