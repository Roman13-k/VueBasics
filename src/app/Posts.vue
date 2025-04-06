<script setup lang="ts">
import PostForm from '@/components/blocks/posts/PostForm.vue'
import PostList from '@/components/blocks/posts/PostList.vue'
import type { PostInterface } from '@/interfaces/main'
import axios from 'axios'
import { computed, onMounted, ref, watch } from 'vue'

const showModal = ref(false)
const isLoading = ref(false)
const selectedSort = ref('')
const searchQuery = ref('')

const limit = 10
const currentPage = ref(1)
const totalPageCount = ref(1)

const optionList = [
  { value: 'title', name: 'По названию' },
  { value: 'body', name: 'По содержимому' },
]
const posts = ref<PostInterface[]>([])

function createPost(post: PostInterface) {
  posts.value.push(post)
  showModal.value = false
}

function removePost(post: PostInterface) {
  posts.value = posts.value.filter((p: PostInterface) => p !== post)
}

async function fetchPosts() {
  try {
    isLoading.value = true
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _page: currentPage.value,
        _limit: limit,
      },
    })
    posts.value = response.data
    totalPageCount.value = Math.ceil(response.headers['x-total-count'] / limit)
  } catch (error) {
    console.log('Ошибка при звгрузке данных')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})

watch(currentPage, () => {
  fetchPosts()
})

const sortedAndSearchedPosts = computed(() => {
  let sortedPosts = [...posts.value]

  if (selectedSort.value) {
    sortedPosts.sort((a, b) =>
      String(a[selectedSort.value as keyof PostInterface]).localeCompare(
        String(b[selectedSort.value as keyof PostInterface]),
      ),
    )
  }

  return sortedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>

<template>
  <section class="p-20">
    <h1>Страница с постами</h1>
    <div class="flex justify-between items-center">
      <ButtonMain @click="showModal = true">Создать новый пост</ButtonMain>
      <div>
        <InputMain v-model="searchQuery" />
        <SelectMain v-model="selectedSort" :options="optionList" />
      </div>
    </div>
    <ModalMain :showModal="showModal" @close="showModal = false">
      <PostForm @create="createPost" :showModal="showModal"
    /></ModalMain>
    <PostList v-if="!isLoading" @remove="removePost" :posts="sortedAndSearchedPosts" />
    <p v-else>Загрка данных</p>
    <PaginationMain
      :totalPageCount="totalPageCount"
      :currentPage="currentPage"
      @updatePage="(val: number) => (currentPage = val)"
    />
  </section>
</template>
