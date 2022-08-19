<template>
  <ul class="nav flex-column task__sidebar">
    <li class="nav-item" v-bind:key="task" v-for="task in getItems">
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
export default {
  name: "NavSideBarComponent",
  computed: {
    getItems() {
      return this.$store.getters.allTasks;
    },
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
