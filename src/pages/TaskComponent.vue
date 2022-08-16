<template>
  <div class="task">
    <button class="btn btn-primary" @click="goBack()">Go back</button>
    <NavSideBarComponent></NavSideBarComponent>
    <TaskDescComponent v-bind:id="id"></TaskDescComponent>
  </div>
</template>

<script>
import NavSideBarComponent from "../components/NavSideBarComponent.vue";
import TaskDescComponent from "../components/TaskDescComponent.vue";

export default {
  name: "TaskComponent",
  components: { NavSideBarComponent, TaskDescComponent },
  props: ["id"],
  methods: {
    goBack() {
      this.$router.push("/tasklist");
    },
  },
};
</script>

<style>
.task__item {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
