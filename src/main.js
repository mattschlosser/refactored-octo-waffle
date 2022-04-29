import { createApp } from 'vue'
import relativeNonJsFile from "./App.vue"; // click+click works
import aliasedNonJsFile from '@/App.vue' // ctrl+click does not work
import relativeJsFile from "./config"; // ctrl+click works
import aliasedJsFile from "@/config"; // ctrl+click works

createApp(App, config).mount('#app')
