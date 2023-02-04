import { createApp } from 'vue'
import KUI from '../../src/index.js'
import App from './App.vue'
import '../../src/styles/index.scss';
console.log(KUI)


createApp(App).use(KUI).mount('#app')