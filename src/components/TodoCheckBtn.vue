<template>
  <button
    type="button"
    class="btn"
    :class="[todo.done ? 'btn-success' : 'btn-secondary']"
    v-on:click="changedone"
  >
    {{ getBtnText }}
  </button>
</template>

<script>
export default {
  name: "TodoCheckBtn",
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    changedone() {
      this.$emit("changedone", this.todo.id);
    },
  },
  computed: {
    getBtnText() {
      if (this.todo.done) return "completed";
      else return "in order";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
