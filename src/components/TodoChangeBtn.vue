<template>
  <button type="button" class="btn btn-primary" v-on:click="changetexttask">
    Change text
  </button>
</template>

<script>
export default {
  name: "TodoChangeBtn",
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    changetexttask() {
      this.$emit("changetexttask", this.todo.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
