<template>
  <div class="w-full m-4 flex items-center justify-center">
    <div class="flex gap-3">
      <button
        @click="changePage(page)"
        :key="page"
        :class="[
          'border border-blue-500 py-1 px-2 w-[50px] rounded-xl',
          page === currentPage ? 'bg-blue-500 text-white' : '',
        ]"
        class="border border-blue-500 py-1 px-2 w-[50px] rounded-xl"
        v-for="page in totalPageCount"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PaginationMain',
})

defineProps<{
  totalPageCount: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'updatePage', value: number): void
}>()

function changePage(page: number) {
  emit('updatePage', page)
}
</script>

<style scoped></style>
