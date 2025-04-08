<template>
  <section class="p-20">
    <h1 class="mb-5">{{ doubleLikes }}</h1>
    <div class="flex gap-4">
      <ButtonMain @click="increment">Лайк</ButtonMain>
      <ButtonMain @click="decrement">Дизлайк</ButtonMain>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
// @ts-ignore
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const doubleLikes = computed(() => store.getters.doubleLikes)
    const increment = () => {
      store.commit('incrementLikes')
    }
    const decrement = () => {
      store.commit('decrementLikes')
    }

    return { doubleLikes, increment, decrement }
  },
})
</script>

<style scoped></style>
