import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './plugin/i18n'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'

const app = createApp(App)

app.component('Button', Button)

app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(i18n)
app.mount('#app')

