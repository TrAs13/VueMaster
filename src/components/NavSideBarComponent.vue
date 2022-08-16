<template>
  <ul class="nav flex-column task__sidebar">
    <li class="nav-item" v-bind:key="task" v-for="task in items">
      <router-link
        class="nav-link"
        active-class="active"
        :to="{
          name: 'taskId',
          params: { id: task.id },
          query: { desc: task.desc },
        }"
        >{{ task.title }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "NavSideBarComponent",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/tasks`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.task__sidebar {
  margin-right: 20px;
  border: 1px solid black;
  float: left;
}
</style>
