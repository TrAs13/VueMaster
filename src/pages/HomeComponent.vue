<template>
  <h1>Hi from Home</h1>
  <form v-if="!auth">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter login"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="login">Submit</button>
  </form>
</template>

<script>
export default {
  name: "HomeComponent",
  props: { auth: Boolean },
  methods: {
    login() {
      this.$emit("login");
      this.$router.push({ path: "/tasklist" });
    },
  },
};
</script>

<style></style>
