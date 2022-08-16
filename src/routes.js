import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeComponent";
import AboutPage from "./pages/AboutComponent";
import TaskListPage from "./pages/TaskListComponent";
import TaskPage from "./pages/TaskComponent";
import Error404Page from "./pages/Error404Component";
import axios from "axios";
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
      const res = await axios.get(`http://localhost:3000/auth`);
      if (res.data.auth) next();
    },
  },
  {
    path: "/task/:id",
    component: TaskPage,
    name: "taskId",
    props: true,
    async beforeEnter(to, from, next) {
      const res = await axios.get(`http://localhost:3000/auth`);
      if (res.data.auth) next();
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
