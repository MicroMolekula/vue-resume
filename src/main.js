import './assets/main.css'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .provide('bootstrap', bootstrap)
    .mount('#app')
