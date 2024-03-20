<template>
  <form @submit.prevent="handleSubmit" class="bg-gray-300 h-screen">
    <HeaderScissors />
    <SignUpBody />
    <FooterVue></FooterVue>
  </form>
</template>

<script>
import HeaderScissors from "../components/HeaderScissors.vue";
import SignUpBody from "../components/SignUpBody.vue";
import FooterVue from "../components/FooterVue.vue";
export default {
  components: { HeaderScissors, SignUpBody, FooterVue },
};
</script>

<style scoped></style>
