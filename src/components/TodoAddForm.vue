<template>
  <div class="input-group mb-3">
    <input
      v-blur
      type="text"
      class="form-control"
      placeholder="Add new task"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model.trim="text"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
      v-on:click="addnewtask"
      :disabled="text.length == 0"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoAddForm",
  methods: {
    addnewtask() {
      this.$emit("addnewtask", this.text);
      this.text = "";
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
