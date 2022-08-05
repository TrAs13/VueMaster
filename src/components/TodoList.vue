<template>
  <h1 v-if="todoitems.length == 0">Please add new task!</h1>
  <ol v-else class="list-group list-group-numbered">
    <TodoItem
      v-for="todoItem in filteredItems"
      :key="todoItem.id"
      v-bind:todo="todoItem"
      v-on:changedone="changedone"
    ></TodoItem>
  </ol>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    filter: String,
    filtertext: String,
    todoitems: Array,
  },
  methods: {
    changedone(id) {
      this.$emit("changedone", id);
    },
  },
  computed: {
    filteredItems() {
      let todos = this.todoitems.filter(
        (item) =>
          item.text.toLowerCase().indexOf(this.filtertext.toLowerCase()) > -1
      );
      if (this.filter == "completed") return todos.filter((item) => item.done);
      if (this.filter == "inorder") return todos.filter((item) => !item.done);
      else return todos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
