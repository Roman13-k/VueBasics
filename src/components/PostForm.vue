<template>
  <form @submit.prevent="createPost" class="mb-20 flex flex-col gap-3 items-center">
    <h2 class="text-blue-500">Создание поста</h2>
    <InputMain v-model="post.title" placeholder="Название" />
    <InputMain v-model="post.description" placeholder="Описание" />
    <p class="text-red-400" v-show="!isValid">Форма не должна быть пустой</p>
    <ButtonMain type="submit">Создать</ButtonMain>
  </form>
</template>

<script setup lang="ts">
import type { PostInterface } from '@/interfaces/PostInterface'
import { reactive, ref } from 'vue'

const emit = defineEmits<{
  (e: 'create', post: PostInterface): void
}>()

const post = reactive({
  title: '',
  description: '',
})

const isValid = ref(true)

function createPost() {
  if (post.title.trim().length === 0 || post.description.trim().length === 0) {
    isValid.value = false
    return
  }
  emit('create', {
    id: Date.now(),
    title: post.title,
    description: post.description,
  })

  post.title = ''
  post.description = ''
  isValid.value = true
}
</script>

<style lang="scss" scoped></style>
