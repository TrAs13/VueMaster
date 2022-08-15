<template>
  <h1>Hi from TaskList</h1>
  <ul class="list-group">
    <li class="list-group-item" v-bind:key="task" v-for="task in 5">
      <router-link :to="'/task/' + task">Task {{ task }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TaskListComponent",
};
</script>

<style></style>
