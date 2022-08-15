<template>
  <NavBarComponent></NavBarComponent>
  <router-view v-bind:auth="authenticated" v-on:login="login"></router-view>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
export default {
  name: "App",
  components: { NavBarComponent },
  data() {
    return {
      authenticated: false,
    };
  },
  mounted() {
    localStorage.setItem("auth", false);
  },
  methods: {
    login() {
      this.authenticated = true;
      localStorage.setItem("auth", true);
    },
  },
};
</script>

<style></style>
