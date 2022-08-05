<template>
  <h1>{{ msg }}</h1>
  <TodoAddForm v-on:addnewtask="addnewtask"></TodoAddForm>
  <TodoSearch v-on:searchtask="searchtask"></TodoSearch>
  <TodoFilter v-on:changefilter="changefilter"></TodoFilter>
  <TodoInfo v-bind:todoitems="todoItems"></TodoInfo>
  <TodoList
    v-bind:todoitems="todoItems"
    v-bind:filter="filter"
    v-bind:filtertext="filtertext"
    v-on:changedone="changedone"
    v-on:removetask="removetask"
  ></TodoList>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoInfo from "./components/TodoInfo.vue";
import TodoAddForm from "./components/TodoAddForm.vue";
import TodoSearch from "./components/TodoSearch.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoFilter,
    TodoInfo,
    TodoAddForm,
    TodoSearch,
  },

  data() {
    return {
      msg: "Hello from Vue App",
      todoItems: [
        // { id: 1, text: "task 1", done: false },
        // { id: 2, text: "task 2", done: false },
        // { id: 3, text: "task 3", done: true },
        // { id: 4, text: "task 4", done: false },
        // { id: 5, text: "task 5", done: false },
      ],
      filter: "all",
      filtertext: "",
    };
  },

  methods: {
    changedone(id) {
      for (let i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].id == id) {
          this.todoItems[i].done = !this.todoItems[i].done;
          break;
        }
      }
    },
    addnewtask(text) {
      let newId;
      if (this.todoItems.length == 0) newId = 1;
      else
        newId =
          Math.max(...Object.values(this.todoItems).map((elem) => elem.id)) + 1;
      this.todoItems.push({ id: newId, text: text, done: false });
    },
    changefilter(filter) {
      this.filter = filter;
    },
    searchtask(text) {
      this.filtertext = text;
    },
    removetask(id) {
      this.todoItems = this.todoItems.filter((t) => t.id !== id);
    },
  },
};
</script>

<style></style>
