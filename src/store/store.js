import axios from "axios";
import { createStore } from "vuex";
const store = createStore({
  actions: {
    async fetchTasks(ctx) {
      const res = await axios.get(`http://localhost:3000/tasks`);
      const tasks = res.data;
      ctx.commit("updateTasks", tasks);
    },
    async addTasks(ctx, params) {
      const res = await axios.post(`http://localhost:3000/tasks`, {
        id: new Date(),
        title: params[0],
        desc: params[1],
        created: new Date(),
        updated: new Date(),
        done: false,
      });
      ctx.commit("addTask", res.data);
    },
    async updateDone(ctx, params) {
      const res = await axios.patch(
        `${`http://localhost:3000/tasks`}/${params[0]}`,
        {
          done: !params[1],
          updated: new Date(),
        }
      );
      ctx.commit("updateDone", res.data);
    },
    async updateTask(ctx, params) {
      const res = await axios.patch(
        `${`http://localhost:3000/tasks`}/${params[0]}`,
        {
          title: params[1],
          desc: params[2],
          updated: new Date(),
        }
      );
      ctx.commit("updateTask", res.data);
    },
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateDone(state, task) {
      const stateTask = state.tasks.find((item) => item.id === task.id);
      stateTask.done = task.done;
      stateTask.updated = new Date();
    },
    updateTask(state, task) {
      const stateTask = state.tasks.find((item) => item.id === task.id);
      stateTask.title = task.title;
      stateTask.desc = task.desc;
      stateTask.updated = new Date();
    },
  },
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
});
export default store;
