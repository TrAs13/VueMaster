<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" to="/" active-class="active"
        >Home</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/tasklist" active-class="active"
        >TaskList</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about" active-class="active"
        >About</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
