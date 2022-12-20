import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

import { pinia } from './stores'

app.use(pinia)





app.mount('#app')
