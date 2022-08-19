<template>
  <div class="task__item">
    <div ref="title" contenteditable="true">{{ item.title }}</div>
    <div ref="desc" contenteditable="true">{{ $route.query.desc }}</div>
    <p>Create date {{ item.created }}</p>
    <p>Update date {{ item.updated }}</p>
    <button
      type="button"
      class="btn"
      :class="[item.done ? 'btn-success' : 'btn-secondary']"
      v-on:click="changeDone"
    >
      {{ getBtnText }}
    </button>
    <button type="button" class="btn btn-danger" v-on:click="removeTask">
      Remove
    </button>
    <button type="button" class="btn btn-primary" v-on:click="changeTask">
      Change task
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavSideBarComponent",
  props: ["id"],
  data() {
    return {
      item: [],
    };
  },
  async created() {
    this.item = this.$store.getters.allTasks.filter(
      (item) => item.id == this.id
    )[0];
  },

  watch: {
    async "$route.path"() {
      this.item = this.$store.getters.allTasks.filter(
        (item) => item.id == this.$route.params.id
      )[0];
    },
  },
  computed: {
    getBtnText() {
      if (this.item.done) return "completed";
      else return "in order";
    },
  },
  methods: {
    async removeTask() {
      axios.delete(`http://localhost:3000/tasks/${this.id}`);
      this.$router.push({ path: "/tasklist" });
    },
    async changeDone() {
      this.$store.dispatch("updateDone", [this.id, this.item.done]);
    },
    async changeTask() {
      this.$store.dispatch("updateTask", [
        this.id,
        this.$refs.title.innerText,
        this.$refs.desc.innerText,
      ]);
    },
  },
};
</script>

<style>
.task__sidebar {
  margin-right: 20px;
  border: 1px solid black;
  float: left;
}
</style>
