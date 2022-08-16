<template>
  <div class="app">
    <NavBarComponent></NavBarComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
export default {
  name: "App",
  components: { NavBarComponent },
};
</script>

<style>
.app {
  max-width: 800px;
  margin: auto;
}
</style>
