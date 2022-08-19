<template>
  <h1>Hi from TaskList</h1>

  <FormAddTaskComponent></FormAddTaskComponent>
  <TaskListSearchComponent
    v-on:searchtask="searchtask"
  ></TaskListSearchComponent>
  <TaskListFilterComponent
    v-on:changefilter="changefilter"
  ></TaskListFilterComponent>
  <TaskListInfoComponent v-bind:todoitems="items"></TaskListInfoComponent>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-bind:key="task"
      v-for="task in searchedItems"
      :class="[task.done ? 'bg-success' : 'bg-secondary']"
    >
      <router-link
        class="nav-link"
        :to="{
          name: 'taskId',
          params: { id: task.id },
          query: { desc: task.desc },
        }"
        >{{ task.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import FormAddTaskComponent from "@/components/FormAddTaskComponent.vue";
import TaskListFilterComponent from "@/components/TaskListFilterComponent.vue";
import TaskListSearchComponent from "../components/TaskListSearchComponent.vue";
import TaskListInfoComponent from "../components/TaskListInfoComponent.vue";

export default {
  name: "TaskListComponent",
  components: {
    FormAddTaskComponent,
    TaskListFilterComponent,
    TaskListSearchComponent,
    TaskListInfoComponent,
  },
  data() {
    return {
      filter: "all",
      filtertext: "",
      items: [],
    };
  },
  async created() {
    this.$store.dispatch("fetchTasks");
  },
  methods: {
    changefilter(filter) {
      this.filter = filter;
    },
    searchtask(text) {
      this.filtertext = text;
    },
  },
  computed: {
    filteredItems() {
      if (this.filter == "completed")
        return this.$store.getters.getComletedTasks;
      if (this.filter == "inorder")
        return this.$store.getters.getNotComletedTasks;
      else return this.$store.getters.allTasks;
    },
    searchedItems() {
      return this.filteredItems.filter(
        (item) =>
          item.title.toLowerCase().indexOf(this.filtertext.toLowerCase()) > -1
      );
    },
  },
};
</script>

<style scoped>
.list-group {
  margin-top: 10px;
}
</style>
