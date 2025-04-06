<template>
  <header class="text-white bg-blue-500 mx-20 my-5 sticky top-5 p-5 rounded-[40px]">
    <div class="w-full flex items-center justify-between">
      <RouterLink class="border-2 border-white p-2" to="/">Vue 3</RouterLink>
      <ul class="flex itens-center gap-4 text-[18px] font-medium">
        <li>
          <RouterLink to="/about">О нас</RouterLink>
        </li>
        <li>
          <RouterLink to="/posts">Посты</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
