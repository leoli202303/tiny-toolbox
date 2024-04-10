import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import { registerSW } from 'virtual:pwa-register';
import { plausible } from './plugins/plausible.plugin';

import 'virtual:uno.css';

import { naive } from './plugins/naive.plugin';

import App from './App.vue';
import router from './router';
import { i18nPlugin } from './plugins/i18n.plugin';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

// 导入你的路由器实例
// import router from './router';

Vue.use(VueAnalytics, {
  id: 'G-DXEFXC39F5', // 替换为你的Google Analytics跟踪ID
  router,
});

registerSW();

const app = createApp(App);

app.use(createPinia());
app.use(createHead());
app.use(i18nPlugin);
app.use(router);
app.use(naive);
app.use(plausible);

app.mount('#app');
