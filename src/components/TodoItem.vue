<template>
  <li class="list-group-item">
    {{ todo.text }}
    <TodoCheckBtn
      v-bind:todo="todo"
      v-on:changedone="changedone"
    ></TodoCheckBtn>
    <TodoRemoveBtn
      v-bind:todo="todo"
      v-on:removetask="removetask"
    ></TodoRemoveBtn>
  </li>
</template>

<script>
import TodoCheckBtn from "./TodoCheckBtn.vue";
import TodoRemoveBtn from "./TodoRemoveBtn.vue";

export default {
  name: "TodoItem",
  components: {
    TodoCheckBtn,
    TodoRemoveBtn,
  },
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    removetask(id) {
      this.$emit("removetask", id);
    },
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
