import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close', false)
    },
  },
  mounted() {
    console.log('mixin mounted')
  },
})
