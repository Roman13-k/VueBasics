<template>
  <section v-show="posts.length > 0">
    <h2>Список постов</h2>
    <div class="flex flex-col gap-5">
      <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
    </div>
  </section>
  <h2 v-show="posts.length === 0" class="text-red-500 text-center">Постов нет</h2>
</template>

<script setup lang="ts">
import type { PostInterface } from '@/interfaces/main'
import PostItem from './PostItem.vue'

defineEmits<{
  (e: 'remove', post: PostInterface): void
}>()

defineProps<{
  posts: {
    id: number
    title: string
    body: string
  }[]
}>()
</script>

<style lang="scss" scoped></style>
