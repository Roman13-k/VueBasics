// @ts-ignore
import { createStore } from 'vuex'

const store = createStore({
  state: {
    likes: 1,
  },
  getters: {
    doubleLikes() {
      return store.state.likes * 2
    },
  },
  mutations: {
    incrementLikes() {
      return (store.state.likes += 1)
    },
    decrementLikes() {
      return (store.state.likes -= 1)
    },
  },
  actions: {},
})

export default store
