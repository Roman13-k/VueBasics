<template>
  <input
    :value="modelValue"
    @input="upgradeValue"
    class="border border-gray-500 rounded-[20px] py-2 px-10 w-[200px]"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
defineOptions({
  name: 'InputMain',
})

defineProps<{
  modelValue: string | number
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function upgradeValue(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
