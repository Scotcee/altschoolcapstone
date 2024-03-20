<template>
  <div class="bg-gray-300 h-full-screen hero-section-bg pt-3">
    <HeaderScissors></HeaderScissors>
    <HeroSection v-if="!user"></HeroSection>
    <UserPage v-else></UserPage>
    <div class="bg-white h-full my-10 py-10">
      <FeaturesPage></FeaturesPage>
      <Reviews v-if="!user"></Reviews>
      <FAQ v-if="!user"></FAQ>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script setup>
import { createStore } from "vuex";
import storeInstance from "../store/index.js";
import { ref, computed } from "vue";

import Reviews from "../components/Reviews.vue";
import FeaturesPage from "../components/FeaturesPage.vue";
import HeaderScissors from "../components/HeaderScissors.vue";
import HeroSection from "../components/HeroSection.vue";
import FAQ from "../components/FAQ.vue";
import FooterVue from "../components/FooterVue.vue";
import UserPage from "../components/UserPage.vue";

const store = storeInstance;
const user = computed(() => store.state.user);
</script>

<style scoped>
/* Scoped styles for LandingPage.vue */
</style>
