<template>
  <div class="flex justify-between items-center gap-2 p-2 border-2 border-blue-500">
    <div class="flex flex-col">
      <p>
        ID:<strong>{{ post.id }}</strong>
      </p>
      <div>
        Название: <strong>{{ post.title }}</strong>
      </div>
      <div>
        Описание: <strong>{{ post.body }}</strong>
      </div>
    </div>
    <ButtonMain class="h-[40px]" @click="$emit('remove', post)">Удалить</ButtonMain>
  </div>
</template>

<script setup lang="ts">
import type { PostInterface } from '@/interfaces/main'
defineProps<{ post: PostInterface }>()
</script>

<style lang="scss" scoped></style>
