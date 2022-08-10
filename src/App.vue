<template>
  <h1 v-color="msgColor">{{ msg }}</h1>
  <h1 v-color="msgColor">{{ $filters.numberFormat(10000, "руб") }}</h1>
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
    v-on:changetexttask="changetexttask"
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
      msgColor: "blue",
      filter: "all",
      filtertext: "",
      todoItems: [],
    };
  },
  async mounted() {
    await this.updateTodoItems();
  },
  methods: {
    async updateTodoItems() {
      let keys = await Object.keys(localStorage);
      if (keys) {
        let todos = [];
        for (let key of keys) {
          todos.push(JSON.parse(localStorage.getItem(key)));
        }
        this.todoItems = todos;
      }
    },
    changedone(id) {
      localStorage.setItem(
        id,
        JSON.stringify({
          id: id,
          text: this.todoItems[id].text,
          done: !this.todoItems[id].done,
        })
      );
      this.updateTodoItems();
    },
    addnewtask(text) {
      let newId;
      if (this.todoItems.length == 0) newId = 0;
      else
        newId =
          Math.max(...Object.values(this.todoItems).map((elem) => elem.id)) + 1;
      localStorage.setItem(
        newId,
        JSON.stringify({ id: newId, text: text, done: false })
      );
      this.updateTodoItems();
    },
    changefilter(filter) {
      this.filter = filter;
    },
    searchtask(text) {
      this.filtertext = text;
    },
    removetask(id) {
      localStorage.removeItem(id);
      this.updateTodoItems();
    },
    changetexttask(id, text) {
      localStorage.setItem(
        id,
        JSON.stringify({ id: id, text: text, done: this.todoItems[id].done })
      );
      this.updateTodoItems();
    },
  },
};
</script>

<style>
#app {
  max-width: 800px;
  margin: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
