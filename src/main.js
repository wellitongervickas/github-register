import Vue from 'vue';

import router from '@/config/router';

import App from './App.vue';

import './registerServiceWorker';

import '@/assets/styles/app.scss';
import '@/config/icons';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
