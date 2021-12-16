import { createApp } from 'vue'
import App from './App.vue'

/**
 * 引入路由文件
 */
import router from './router';

/**
 * 引入全局状态管理文件
 */
import store from './store';

createApp(App).use(router).use(store).mount('#app')
