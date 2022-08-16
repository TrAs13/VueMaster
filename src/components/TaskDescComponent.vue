<template>
  <div class="task__item">
    <h1>{{ item.title }}</h1>
    <p>{{ $route.query.desc }}</p>
    <p>Create date {{ item.created }}</p>
    <p>Update date {{ item.updated }}</p>
    <button
      type="button"
      class="btn"
      :class="[item.done ? 'btn-success' : 'btn-secondary']"
      v-on:click="changedone"
    >
      {{ getBtnText }}
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
    try {
      const res = await axios.get(`http://localhost:3000/tasks/${this.id}`);
      this.item = res.data;
      console.log(this.item);
    } catch (error) {
      console.log(error);
    }
  },
  watch: {
    async "$route.path"() {
      try {
        const res = await axios.get(
          `http://localhost:3000/tasks/${this.$route.params.id}`
        );
        this.item = res.data;
        console.log(this.item);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    getBtnText() {
      if (this.item.done) return "completed";
      else return "in order";
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
