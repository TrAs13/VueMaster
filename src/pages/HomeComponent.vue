<template>
  <h1>Hi from Home</h1>
  <form v-if="!auth" @submit.prevent="login">
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <button v-if="auth" @click="login">Logout</button>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeComponent",
  data() {
    return {
      auth: false,
    };
  },
  created() {
    this.getAuth();
  },
  methods: {
    async login() {
      try {
        await axios.patch(`${`http://localhost:3000/auth`}`, {
          auth: !this.auth,
        });
        this.auth = !this.auth;
      } catch (error) {
        console.error(error);
      }
      await this.$router.push({ path: "/tasklist" });
    },
    async getAuth() {
      try {
        const res = await axios.get(`http://localhost:3000/auth`);
        this.auth = res.data.auth;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
