<template>
  <select
    class="border border-blue-500 rounded-[20px] p-3"
    :value="modelValue"
    @change="changeOption"
  >
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { Option } from '@/interfaces/main'

defineOptions({
  name: 'SelectMain',
})

defineProps<{
  modelValue: string
  options: Option[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function changeOption(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped></style>
