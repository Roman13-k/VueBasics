<script setup lang="ts">
import { ref } from 'vue'
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
import type { PostInterface } from './interfaces/PostInterface'

const posts = ref<PostInterface[]>([
  { id: 1, title: 'JavaScript 1', description: 'Это пост о JavaScript 1' },
  { id: 2, title: 'JavaScript 2', description: 'Это пост о JavaScript 2' },
  { id: 3, title: 'JavaScript 3', description: 'Это пост о JavaScript 3' },
  { id: 4, title: 'JavaScript 4', description: 'Это пост о JavaScript 4' },
  { id: 5, title: 'JavaScript 5', description: 'Это пост о JavaScript 5' },
])

function createPost(post: PostInterface) {
  posts.value.push(post)
}

function removePost(post: PostInterface) {
  posts.value = posts.value.filter((p: PostInterface) => p !== post)
}
</script>

<template>
  <div class="p-10">
    <PostForm @create="createPost" />
    <PostList @remove="removePost" :posts="posts" />
  </div>
</template>
