<template>
  <div class="todo-info mt-3">
    <div class="badge bg-primary">Completed task {{ getCompleted }}</div>
    <div class="badge bg-primary">All tasks {{ getAllTask }}</div>
    <div class="badge bg-primary">Percent complete task {{ getPercent }}%</div>
  </div>
</template>

<script>
export default {
  name: "TaskListInfoComponent",
  props: {
    todoitems: Array,
  },
  data() {
    return {
      filter: "all",
    };
  },
  computed: {
    getCompleted() {
      return this.todoitems.filter((todo) => todo.done).length;
    },
    getAllTask() {
      return this.todoitems.length;
    },
    getPercent() {
      return Math.round(
        (this.todoitems.filter((todo) => todo.done).length /
          (this.todoitems.length || 1)) *
          100
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-info {
  display: flex;
  gap: 10px;
  margin: auto;
}
</style>
