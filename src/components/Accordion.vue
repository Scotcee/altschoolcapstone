<template>
  <div>
    <div class="accordion-content text-left">
      <div
        @click="isOpen = !isOpen"
        class="accordion-question flex mt-2 p-2 rounded font-bold pointer"
        :class="{ 'border-2': isOpen, 'border-none': !isOpen }"
        style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
      >
        <h3 class="pointer flex-grow">{{ title }}</h3>
        <button class="ml-auto">
          <i class="bi bi-caret-down-fill font-4xl"></i>
        </button>
      </div>
      <div
        class="accordion-answer bg-gray-300 border-2 p-2 rounded"
        :class="isOpen ? 'd-block' : 'hidden'"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.border-none {
  border: none !important;
}
</style>
