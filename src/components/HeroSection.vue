<template>
    <div class="mx-auto mt-10 max-w-md md:max-w-lg relative">
      <h1 class="text-4xl text-center">Create Links! <span class="text-blue-500 relative">Shorter</span></h1>
      <div class="relative mt-10">
        <div class="flex items-center">
          <input
            v-model="searchQuery"
            @input="handleInput"
            type="text"
            placeholder="Input your long URL here"
            class="w-full px-12 py-2 rounded-full border border-gray-300 shadow focus:outline-none focus:border-blue-500"
          />
          <i class="bi bi-send text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3"></i>
        </div>
      </div>
    </div>
    <div class="md:flex md:mx-20 mx-5 md:my-20 my:10 mb-20 md:max-w-full px-2 relative">
      <div class="text-section flex-1 w-full h-full">
        <h1 class="text-4xl md:text-6xl my-5">Effortlessly Control, Customize Domains, and Track Insights</h1>
        <Button :buttonText="buttonText" />
      </div>
      <div class="image_section flex-1 my-2 mx-3 w-full ">
        <img class="rounded-md" src="../assets/infographics.jpg" alt="infographics" width="90%">
      </div>
    </div>
  </template>
  
  <script>
  import Button from './Button.vue';
  export default {
    components: {
      Button
    },
    data() {
      return {
        searchQuery: '',
        buttonText: 'LogIn/SignUp' // Move buttonText inside return object
      };
    },
    methods: {
      handleInput() {
        console.log('Search query:', this.searchQuery);
      }
    }
  };
  </script>
  
  <style scoped>
  .text-blue-500.relative::after {
    content: '';
    position: absolute;
    bottom: -2px; 
    left: 0;
    right: 0;
    height: 1px;
    background-color: currentColor;
    background-image: repeating-linear-gradient(to right, transparent, transparent 3px, currentColor 3px, currentColor 6px);
  }
  </style>
  