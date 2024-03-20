<template>
  <div class="mb-5 md:mx-20 mx-10 flex md:flex justify-between relative">
    <div class="flex-1 logo absolute left-0 top-0 flex cursor-pointer">
      <img
        class="md:mt-3"
        src="../assets/icons8-scissors-96.png"
        alt="logo_png"
        width="25%"
      />
      <h3 class="font-bold ml-2 mt-4 text-xl">SCISSORS</h3>
    </div>
    <div class="flex items-center ml-auto">
      <span
        @click="menuOpen()"
        class="absolute right-0 top-0 md:hidden cursor-pointer text-4xl ml-auto"
      >
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
      <div
        class="relative top-10 left-5 mb-10 md:top-2 md:flex md:flex-col md:items-end md:justify-end md:w-auto"
      >
        <transition name="fade">
          <ul
            v-if="open"
            class="md:flex duration-700 ease-in left-0 md:right-0"
          >
            <li class="md:mx-4 hover:text-blue-300">
              <a href="#" class="text-white hover:text-blue-300">Contact</a>
            </li>
            <li
              v-for="(link, index) in links"
              :key="index"
              class="md:mx-4 ml-4 hover:text-blue-300"
            >
              <router-link :to="link.link">
                <a class="text-white hover:text-blue-300">{{ link.name }}</a>
              </router-link>
            </li>

            <div v-if="user" class="flex flex-col md:flex-row">
              <span class="text-white mb-2 md:mb-0 md:mr-4"
                >Logged in as {{ user.email }}</span
              >
              <Button
                v-if="!isLoggedIn"
                :buttonText="logoutButtonText"
                @click="logout"
                class="text-white"
              />
            </div>
            <div v-if="!user">
              <Button
                v-if="!isLoggedIn && $route.path !== '/login'"
                :buttonText="buttonText"
                class="text-white"
              />
            </div>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Button from "./Button.vue";
import { useStore } from "vuex";

export default {
  components: {
    Button,
  },
  setup() {
    const open = ref(true);
    const route = useRoute();
    const store = useStore();
    const links = [
      { name: "Home", link: "/" },
      { name: "Report", link: "/" },
    ];
    const buttonText = ref("Log In");
    const logoutButtonText = "Log Out";

    const logout = () => {
      store.dispatch("logout");
    };

    function menuOpen() {
      open.value = !open.value;
    }

    return {
      open,
      links,
      buttonText,
      logoutButtonText,
      menuOpen,
      logout,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
      isLoggedIn: computed(() => store.state.isLoggedIn), // Assuming isLoggedIn is a property in your store
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
