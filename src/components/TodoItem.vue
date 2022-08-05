<template>
  <li class="list-group-item todo-item">
    <div ref="task" contenteditable="true">
      {{ todo.text }}
    </div>
    <div class="todo-item_btns">
      <TodoChangeBtn
        v-bind:todo="todo"
        v-on:changetexttask="changetexttask"
      ></TodoChangeBtn>
      <TodoCheckBtn
        v-bind:todo="todo"
        v-on:changedone="changedone"
      ></TodoCheckBtn>
      <TodoRemoveBtn
        v-bind:todo="todo"
        v-on:removetask="removetask"
      ></TodoRemoveBtn>
    </div>
  </li>
</template>

<script>
import TodoCheckBtn from "./TodoCheckBtn.vue";
import TodoRemoveBtn from "./TodoRemoveBtn.vue";
import TodoChangeBtn from "./TodoChangeBtn.vue";

export default {
  name: "TodoItem",
  components: {
    TodoCheckBtn,
    TodoRemoveBtn,
    TodoChangeBtn,
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
    changetexttask(id) {
      this.$emit("changetexttask", id, this.$refs.task.innerText);
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
<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.todo-item_btns {
  display: flex;
  gap: 10px;
}
</style>
