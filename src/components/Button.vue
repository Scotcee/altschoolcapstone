<template>
  <div>
    <router-link to="/LogIn">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-8 py-1 px-7 rounded-xl shadow-md bg-opacity-70"
      >
        {{ buttonText }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
};
</script>

<style scoped></style>
