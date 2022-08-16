<template>
  <div class="task">
    <ul class="nav flex-column task__sidebar">
      <li class="nav-item" v-bind:key="task" v-for="task in 5">
        <router-link
          class="nav-link"
          active-class="active"
          :to="{
            name: 'taskId',
            params: { id: task },
            query: { desc: 'This description task ' + task },
          }"
          >Task {{ task }}</router-link
        >
      </li>
    </ul>
    <h1>Task by id {{ id }}</h1>
    <p>{{ $route.query.desc }}</p>
  </div>
  <button class="btn btn-primary" @click="goBack()">Go back</button>
</template>

<script>
export default {
  name: "TaskComponent",
  props: ["id"],
  methods: {
    goBack() {
      this.$router.push("/tasklist");
    },
  },
};
</script>

<style>
.task {
  display: flex;
}

.task__sidebar {
  margin-right: 10px;
  border: 1px solid black;
}
</style>
