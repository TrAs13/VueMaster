<template>
  <select
    class="form-select"
    @change="changefilter"
    v-model="filter"
    aria-label="Default select example"
  >
    <option selected value="all">all</option>
    <option value="completed">completed</option>
    <option value="inorder">in order</option>
  </select>
</template>

<script>
export default {
  name: "TodoFilter",
  props: {
    todo: {
      type: Object,
    },
  },
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    changefilter() {
      this.$emit("changefilter", this.filter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
