<template>
  <div
    v-if="showModal"
    @click="closeModal"
    class="fixed w-full h-full bg-[#00000038] top-0 left-0 flex justify-center items-center"
  >
    <div @click.stop class="w-[400px] h-[300px] bg-white border border-gray-600 rounded-[40px] p-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalMain',
  mixins: [toggleMixin],

  // миксина маунтится первее
  mounted() {
    console.log('modal mounted')
  },
})
</script>

<style scoped></style>
