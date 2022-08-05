<template>
  <div class="input-group mb-3">
    <input
      type="text"
      @input="searchtask"
      class="form-control"
      placeholder="Search item"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model="text"
    />
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  methods: {
    searchtask() {
      this.$emit("searchtask", this.text);
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
