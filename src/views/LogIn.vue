<template>
  <div class="bg-gray-300 h-screen">
    <HeaderScissors></HeaderScissors>
    <div class="mx-auto max-w-md px-4 bg-white shadow-lg rounded-lg">
      <LogInBody></LogInBody>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../components/FooterVue.vue";
import HeaderScissors from "../components/HeaderScissors.vue";
import LogInBody from "../components/LogInBody.vue";

export default { components: { HeaderScissors, LogInBody, FooterVue } };
</script>

<style scoped>
/* Scoped styles for LandingPage.vue */
</style>
