import { createApp } from 'vue'
import App from './App.vue'


// Qui inizia il lavoro di importazione da FontAwesome.

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')