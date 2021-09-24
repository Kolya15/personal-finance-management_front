import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

const app = createApp(App)

app.component('Button', Button)
app.component('InputNumber', InputNumber)

app.use(router)
app.use(store)
app.use(PrimeVue)
app.mount('#app')

