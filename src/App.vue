<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { createStore } from "vuex";
import storeInstance from "./store/index.js";
</script>

<style scoped>
/* Scoped styles for App.vue */
</style>
