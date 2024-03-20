<template>
  <div>
    <nav
      class="md:flex items-center justify-between bg-gray-300 h-full py-2 px-8"
    >
      <div class="flex items-center">
        <div class="logo flex items-center cursor-pointer">
          <img
            class="md:mt-3"
            src="../assets/icons8-scissors-96.png"
            alt="logo_png"
            width="15%"
          />
          <h3 class="font-bold text-black ml-2 mt-4 text-xl">SCISSORS</h3>
        </div>
      </div>
      <ul
        v-if="$route.path !== '/login'"
        class="flex items-center space-x-6 text-black my-2 ml-auto"
      >
        <li class="hover:text-blue-300 transition duration-300">ABOUT</li>
        <li class="hover:text-blue-300 transition duration-300">TERMS</li>
        <li class="hover:text-blue-300 transition duration-300">REPORT</li>
        <li class="hover:text-blue-300 transition duration-300">CONTACT US</li>
      </ul>
      <div class="icon"></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo img {
  max-width: 40px;
}
</style>
