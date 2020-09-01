import Vue from 'vue';
import Router from 'vue-router';

import AuthLogin from '@/views/Auth/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'views-auth-login',
    component: AuthLogin,
  }],
});

export default router;
