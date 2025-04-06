<template>
  <div
    v-if="showModal"
    @click="closeModal"
    class="fixed w-full h-full bg-[#00000038] top-0 left-0 flex justify-center items-center"
  >
    <div @click.stop class="w-[400px] h-[300px] bg-white border border-gray-600 rounded-[40px] p-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ModalMain',
})
defineProps<{
  showModal: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  emit('close')
}
</script>

<style scoped></style>
