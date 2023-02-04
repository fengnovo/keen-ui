import { createApp } from 'vue'
import KUI, { Button, Aside, Container } from '../../src/index.js'
import App from './App.vue'
import '../../src/styles/index.scss';
console.log(KUI)
console.log(Button)
console.log(Aside)
console.log(Container)


createApp(App).use(KUI).mount('#app')