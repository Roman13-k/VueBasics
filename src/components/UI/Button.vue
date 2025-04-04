<template>
  <button
    class="border border-blue-500 bg-blue-500 text-white font-medium text-[18px] mt-3 rounded-[20px] py-2 px-5 hover:opacity-90"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ButtonMain',
})
</script>

<style scoped></style>
