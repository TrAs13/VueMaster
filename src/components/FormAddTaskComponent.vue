<template>
  <form @submit.prevent="addTask">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Title task</label>
      <input required type="text" class="form-control" v-model="title" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"
        >Task description</label
      >
      <input required class="form-control" v-model="desc" />
    </div>
    <button type="submit" class="btn btn-primary">Create task</button>
  </form>
</template>
<script>
export default {
  name: "FormAddTaskComponent",
  data() {
    return {
      title: "",
      desc: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.title, this.desc);
    },
  },
};
</script>
<style></style>
