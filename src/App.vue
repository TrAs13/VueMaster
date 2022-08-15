<template>
  <NavBarComponent></NavBarComponent>
  <router-view></router-view>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
export default {
  name: "App",
  components: { NavBarComponent },
};
</script>

<style></style>
