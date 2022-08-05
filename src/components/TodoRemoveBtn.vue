<template>
  <button type="button" class="btn btn-danger" v-on:click="removetask">
    Remove
  </button>
</template>

<script>
export default {
  name: "TodoRemoveBtn",
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    removetask() {
      this.$emit("removetask", this.todo.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
