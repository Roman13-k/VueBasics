import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from './components/router/router'
import directives from './directives'
import store from './store/store'

const app = createApp(App)

components.forEach((comp) => {
  app.component(comp.name!, comp)
})

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.use(router).use(store).mount('#app')
