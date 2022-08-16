<template>
  <h1>Hi from TaskList</h1>

  <FormAddTaskComponent v-on:addTask="addTask"></FormAddTaskComponent>
  <TaskListSearchComponent
    v-on:searchtask="searchtask"
  ></TaskListSearchComponent>
  <TaskListFilterComponent
    v-on:changefilter="changefilter"
  ></TaskListFilterComponent>
  <TaskListInfoComponent v-bind:todoitems="items"></TaskListInfoComponent>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-bind:key="task"
      v-for="task in filteredItems"
      :class="[task.done ? 'bg-success' : 'bg-secondary']"
    >
      <router-link
        class="nav-link"
        :to="{
          name: 'taskId',
          params: { id: task.id },
          query: { desc: task.desc },
        }"
        >{{ task.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import FormAddTaskComponent from "@/components/FormAddTaskComponent.vue";
import TaskListFilterComponent from "@/components/TaskListFilterComponent.vue";
import TaskListSearchComponent from "../components/TaskListSearchComponent.vue";
import TaskListInfoComponent from "../components/TaskListInfoComponent.vue";

export default {
  name: "TaskListComponent",
  components: {
    FormAddTaskComponent,
    TaskListFilterComponent,
    TaskListSearchComponent,
    TaskListInfoComponent,
  },
  data() {
    return {
      filter: "all",
      filtertext: "",
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/tasks`);
      this.items = res.data;
      console.log(this.items);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addTask(title, desc) {
      const res = await axios.post(`http://localhost:3000/tasks`, {
        id: new Date(),
        title: title,
        desc: desc,
        created: new Date(),
        updated: new Date(),
        done: false,
      });
      this.items = [...this.items, res.data];
    },
    changefilter(filter) {
      this.filter = filter;
    },
    searchtask(text) {
      this.filtertext = text;
    },
  },
  computed: {
    filteredItems() {
      let todos = this.items.filter(
        (item) =>
          item.title.toLowerCase().indexOf(this.filtertext.toLowerCase()) > -1
      );
      if (this.filter == "completed") return todos.filter((item) => item.done);
      if (this.filter == "inorder") return todos.filter((item) => !item.done);
      else return todos;
    },
  },
};
</script>

<style scoped>
.list-group {
  margin-top: 10px;
}
</style>
